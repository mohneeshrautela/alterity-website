import { useState, useRef, useEffect } from 'react'
import './CalculatorPage.css'
import FlowButton from '../FlowButton/FlowButton'

/* ── Helpers ─────────────────────────────────────────── */
const fmt  = (n) => Math.round(n).toLocaleString('en-IN')
const inr  = (n) => '₹' + fmt(n)
const inr2 = (n) => '₹' + n.toFixed(2)
const pct  = (n) => n.toFixed(1) + '%'
const ratio= (n) => n.toFixed(1) + 'x'

/* ── Slider field ────────────────────────────────────── */
function SliderField({ label, value, min, max, step, onChange, display, hint }) {
  return (
    <div className="sf">
      <div className="sf__top">
        <span className="sf__label">
          {label}
          {hint && <span className="sf__hint"> — {hint}</span>}
        </span>
        <span className="sf__value">{display(value)}</span>
      </div>
      <input
        className="sf__slider" type="range"
        min={min} max={max} step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
      />
      <div className="sf__range">
        <span>{display(min)}</span>
        <span>{display(max)}</span>
      </div>
    </div>
  )
}

/* ── Callout box ─────────────────────────────────────── */
function Callout({ label, value, variant }) {
  return (
    <div className={`wiz-callout${variant ? ` wiz-callout--${variant}` : ''}`}>
      <span className="wiz-callout__label">{label}</span>
      <span className="wiz-callout__val">{value}</span>
    </div>
  )
}

/* ── Step config ─────────────────────────────────────── */
const STEPS = [
  { title: 'Call Volume',           subtitle: 'How many accounts are you working each month?',               badge: null },
  { title: 'Human Telecaller Cost', subtitle: 'What does your current team actually cost?',                   badge: 'human' },
  { title: 'AI Pay per Minute',     subtitle: 'Configure the Alterity AI pricing — pay only for talk time.',  badge: 'ai' },
  { title: 'Recovery Impact',       subtitle: 'Estimate the financial uplift from higher recovery rates.',    badge: 'recovery' },
]

/* ── Result row ──────────────────────────────────────── */
function BRow({ label, val, bold }) {
  return (
    <div className={`res-brow${bold ? ' res-brow--bold' : ''}`}>
      <span>{label}</span><span>{val}</span>
    </div>
  )
}

/* ════════════════════════════════════════════════════════
   MAIN COMPONENT
   ════════════════════════════════════════════════════════ */
export default function CalculatorPage() {

  const [step,       setStep]       = useState(0)
  const [calculated, setCalculated] = useState(false)
  const resultsRef = useRef(null)

  useEffect(() => {
    if (calculated && resultsRef.current) {
      resultsRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }, [calculated])

  /* VOLUME */
  const [accountsPerMonth,     setAccountsPerMonth]     = useState(20000)
  const [attemptsPerAccount,   setAttemptsPerAccount]   = useState(3)
  const [workingDays,          setWorkingDays]          = useState(24)

  /* HUMAN */
  const [salaryPerAgent,       setSalaryPerAgent]       = useState(18000)
  const [pfEsi,                setPfEsi]                = useState(3000)
  const [incentives,           setIncentives]           = useState(4000)
  const [telephony,            setTelephony]            = useState(2500)
  const [seatCost,             setSeatCost]             = useState(4000)
  const [supervisorAlloc,      setSupervisorAlloc]      = useState(2500)
  const [trainingAmortized,    setTrainingAmortized]    = useState(2000)
  const [attritionAmortized,   setAttritionAmortized]   = useState(3000)
  const [connectedCallsPerDay, setConnectedCallsPerDay] = useState(45)

  /* AI */
  const [aiRatePerMinute,   setAiRatePerMinute]   = useState(10)
  const [aiCallDurationSec, setAiCallDurationSec] = useState(75)

  /* RECOVERY */
  const [avgLoanAmount,       setAvgLoanAmount]       = useState(50000)
  const [currentRecoveryRate, setCurrentRecoveryRate] = useState(35)
  const [aiRecoveryUplift,    setAiRecoveryUplift]    = useState(15)

  /* ── CALCULATIONS ─────────────────────────────────── */
  const totalConnectedCalls            = accountsPerMonth * attemptsPerAccount
  const connectedCallsPerMonthPerAgent = connectedCallsPerDay * workingDays
  const agentsRequired                 = Math.max(1, Math.ceil(totalConnectedCalls / connectedCallsPerMonthPerAgent))

  const fullyLoadedPerAgent = salaryPerAgent + pfEsi + incentives + telephony
                            + seatCost + supervisorAlloc + trainingAmortized + attritionAmortized
  const humanMonthlyCost    = agentsRequired * fullyLoadedPerAgent
  const humanCostPerCall    = humanMonthlyCost / totalConnectedCalls

  const aiCallDurationMin = aiCallDurationSec / 60
  const totalAiMinutes    = Math.round(totalConnectedCalls * aiCallDurationMin)
  const aiMonthlyCost     = totalAiMinutes * aiRatePerMinute
  const aiCostPerCall     = aiMonthlyCost / totalConnectedCalls

  const monthlySavings  = Math.max(0, humanMonthlyCost - aiMonthlyCost)
  const savingsPct      = humanMonthlyCost > 0 ? (monthlySavings / humanMonthlyCost) * 100 : 0
  const annualSavings   = monthlySavings * 12
  const costRatio       = aiCostPerCall > 0 ? humanCostPerCall / aiCostPerCall : 0
  const aiMoreExpensive = aiMonthlyCost > humanMonthlyCost

  const crFrac          = currentRecoveryRate / 100
  const upliftFrac      = aiRecoveryUplift / 100
  const newRecoveryRate = Math.min(crFrac + upliftFrac, 0.85)

  const accountsRecoveredNow = accountsPerMonth * crFrac
  const recoveryValueNow     = accountsRecoveredNow * avgLoanAmount
  const accountsRecoveredAI  = accountsPerMonth * newRecoveryRate
  const recoveryValueAI      = accountsRecoveredAI * avgLoanAmount
  const additionalRecovery   = recoveryValueAI - recoveryValueNow

  const netMonthlyBenefit = monthlySavings + additionalRecovery
  const roiMultiplier     = aiMonthlyCost > 0 ? netMonthlyBenefit / aiMonthlyCost : 0

  const maxCost = Math.max(humanMonthlyCost, aiMonthlyCost)
  const maxCPC  = Math.max(humanCostPerCall, aiCostPerCall)

  /* ── Step nav ─────────────────────────────────────── */
  const goNext = () => { if (step < 3) setStep(s => s + 1) }
  const goBack = () => { if (step > 0) { setStep(s => s - 1); setCalculated(false) } }
  const goTo   = (i) => { if (i < step) { setStep(i); setCalculated(false) } }

  const stepSummaries = [
    `${fmt(accountsPerMonth)} accounts · ${attemptsPerAccount} attempts · ${workingDays} days`,
    `${agentsRequired} agents · ${inr(fullyLoadedPerAgent)}/agent · Total ${inr(humanMonthlyCost)}/mo`,
    `₹${aiRatePerMinute.toFixed(1)}/min · ${aiCallDurationSec}s · Total ${inr(aiMonthlyCost)}/mo`,
    `${currentRecoveryRate}% → ${pct(newRecoveryRate * 100)} · +${inr(additionalRecovery)}/mo`,
  ]

  return (
    <div className="calc-page">
      <div className="calc-page__inner">

        {/* ── Header ────────────────────────────────────── */}
        <div className="calc-header">
          <h1 className="calc-header__title">See your savings in 4 steps</h1>
          <p className="calc-header__sub">
            AI Agents vs Human Telecallers
          </p>
        </div>

        {/* ── Stepper ───────────────────────────────────── */}
        <div className="wiz-stepper">
          {STEPS.map((s, i) => (
            <div
              key={i}
              className={`wiz-step${i < step ? ' wiz-step--done' : ''}${i === step ? ' wiz-step--active' : ''}`}
              onClick={() => goTo(i)}
            >
              <div className="wiz-step__dot">
                {i < step
                  ? <svg width="13" height="13" viewBox="0 0 13 13" fill="none"><path d="M2 6.5l3 3L11 3" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  : String(i + 1).padStart(2, '0')
                }
              </div>
              <div className="wiz-step__label">{s.title}</div>
            </div>
          ))}
        </div>

        {/* ── Completed chips ───────────────────────────── */}
        {step > 0 && (
          <div className="wiz-chips">
            {STEPS.slice(0, step).map((s, i) => (
              <button key={i} className="wiz-chip" onClick={() => goTo(i)}>
                <span className="wiz-chip__num">{i + 1}</span>
                <span className="wiz-chip__title">{s.title}</span>
                <span className="wiz-chip__val">{stepSummaries[i]}</span>
                <span className="wiz-chip__edit">Edit</span>
              </button>
            ))}
          </div>
        )}

        {/* ── Active step card ──────────────────────────── */}
        <div className="wiz-card" key={step}>
          <div className="wiz-card__header">
            <div className="wiz-card__num">0{step + 1}</div>
            <div>
              <div className={`wiz-card__badge${STEPS[step].badge ? ` wiz-card__badge--${STEPS[step].badge}` : ''}`}>{STEPS[step].title}</div>
              <div className="wiz-card__subtitle">{STEPS[step].subtitle}</div>
            </div>
          </div>

          <div className="wiz-card__body">

            {step === 0 && <>
              <SliderField label="Delinquent Accounts / Month" value={accountsPerMonth}   min={1000}  max={100000} step={1000} onChange={setAccountsPerMonth}   display={v => v.toLocaleString('en-IN')} />
              <SliderField label="Call Attempts per Account"   value={attemptsPerAccount} min={1}     max={10}     step={1}    onChange={setAttemptsPerAccount} display={v => v + ' attempts'} hint="before giving up" />
              <SliderField label="Working Days per Month"      value={workingDays}        min={20}    max={28}     step={1}    onChange={setWorkingDays}        display={v => v + ' days'} />
              <Callout label="Total Calls to Handle" value={totalConnectedCalls.toLocaleString('en-IN')} variant="accent" />
            </>}

            {step === 1 && <>
              <SliderField label="Salary per Agent (₹)"          value={salaryPerAgent}       min={10000} max={55000}  step={500}  onChange={setSalaryPerAgent}       display={v => '₹' + v.toLocaleString('en-IN')} />
              <SliderField label="PF + ESI (₹)"                  value={pfEsi}                min={1000}  max={8000}   step={250}  onChange={setPfEsi}                display={v => '₹' + v.toLocaleString('en-IN')} />
              <SliderField label="Incentives (₹)"                value={incentives}           min={0}     max={15000}  step={500}  onChange={setIncentives}           display={v => '₹' + v.toLocaleString('en-IN')} />
              <SliderField label="Telephony / Dialer (₹)"        value={telephony}            min={500}   max={6000}   step={250}  onChange={setTelephony}            display={v => '₹' + v.toLocaleString('en-IN')} />
              <SliderField label="Seat + Office Cost (₹)"        value={seatCost}             min={1000}  max={10000}  step={500}  onChange={setSeatCost}             display={v => '₹' + v.toLocaleString('en-IN')} />
              <SliderField label="Supervisor Allocation (₹)"     value={supervisorAlloc}      min={500}   max={6000}   step={250}  onChange={setSupervisorAlloc}      display={v => '₹' + v.toLocaleString('en-IN')} />
              <SliderField label="Training Cost Amortised (₹)"   value={trainingAmortized}    min={0}     max={6000}   step={250}  onChange={setTrainingAmortized}    display={v => '₹' + v.toLocaleString('en-IN')} />
              <SliderField label="Attrition Cost Amortised (₹)"  value={attritionAmortized}   min={0}     max={8000}   step={250}  onChange={setAttritionAmortized}   display={v => '₹' + v.toLocaleString('en-IN')} />
              <SliderField label="Connected Calls / Agent / Day" value={connectedCallsPerDay} min={20}    max={100}    step={1}    onChange={setConnectedCallsPerDay} display={v => v + ' calls'} hint="40–55% connect rate" />
              <div className="wiz-callout-row">
                <Callout label="Agents Required"      value={agentsRequired} />
                <Callout label="Fully Loaded / Agent" value={inr(fullyLoadedPerAgent)} />
              </div>
              <Callout label="Total Human Monthly Cost" value={inr(humanMonthlyCost)} variant="total" />
            </>}

            {step === 2 && <>
              <SliderField label="Rate per Minute (₹)" value={aiRatePerMinute}   min={1}  max={20}  step={0.5} onChange={setAiRatePerMinute}   display={v => '₹' + v.toFixed(1) + '/min'} hint="no SaaS fee, no per-call fee" />
              <SliderField label="Avg Call Duration"   value={aiCallDurationSec} min={30} max={300} step={5}   onChange={setAiCallDurationSec} display={v => `${v}s (${(v/60).toFixed(2)} min)`} hint="60–90s typical for recovery" />
              <div className="wiz-callout-row">
                <Callout label="Total Calls"          value={totalConnectedCalls.toLocaleString('en-IN')} />
                <Callout label="Total Minutes Billed" value={totalAiMinutes.toLocaleString('en-IN') + ' min'} />
              </div>
              <Callout label="AI Monthly Cost" value={inr(aiMonthlyCost)} variant="total" />
              {aiMoreExpensive && (
                <div className="wiz-warning">
                  Adjust rate or call duration — AI cost currently exceeds human cost at these settings
                </div>
              )}
            </>}

            {step === 3 && <>
              <SliderField label="Avg Loan Amount (₹)"   value={avgLoanAmount}       min={5000}  max={500000} step={5000} onChange={setAvgLoanAmount}       display={v => '₹' + v.toLocaleString('en-IN')} />
              <SliderField label="Current Recovery Rate" value={currentRecoveryRate} min={5}     max={80}     step={1}    onChange={setCurrentRecoveryRate} display={v => v + '%'} />
              <SliderField label="AI Recovery Uplift"    value={aiRecoveryUplift}    min={1}     max={40}     step={1}    onChange={setAiRecoveryUplift}    display={v => '+' + v + '%'} hint="capped at 85% total" />
              <div className="wiz-callout-row">
                <Callout label="New Recovery Rate"  value={pct(newRecoveryRate * 100) + (crFrac + upliftFrac > 0.85 ? ' (capped)' : '')} />
                <Callout label="Accounts Recovered" value={Math.round(accountsRecoveredAI).toLocaleString('en-IN')} />
              </div>
              <Callout label="Additional Recovery / Month" value={inr(additionalRecovery)} variant="total" />
            </>}

          </div>

          <div className="wiz-card__footer">
            {step > 0 && (
              <button className="wiz-btn wiz-btn--back" onClick={goBack}>← Back</button>
            )}
            {step < 3 ? (
              <button className="wiz-btn wiz-btn--next" onClick={goNext}>
                Next: {STEPS[step + 1].title}
              </button>
            ) : (
              <button className="wiz-btn wiz-btn--calculate" onClick={() => setCalculated(true)}>
                Calculate My ROI
              </button>
            )}
          </div>
        </div>

        {/* ════════════════════════════════════════════════
            RESULTS
            ════════════════════════════════════════════════ */}
        {calculated && (
          <div className="calc-results" ref={resultsRef}>

            {/* ── Hero banner ── */}
            <div className="res-hero">
              <div className="res-hero__left">
                <div className="res-hero__kicker">Your ROI Analysis</div>
                <div className="res-hero__savings">{inr(monthlySavings)}</div>
                <div className="res-hero__saved-label">saved every month</div>
                <div className="res-hero__pills">
                  <span className="res-pill">{pct(savingsPct)} cost reduction</span>
                  <span className="res-pill">{ratio(costRatio)} cheaper per call</span>
                  <span className="res-pill">{inr(annualSavings)} annually</span>
                </div>
              </div>
              <div className="res-hero__divider" />
              <div className="res-hero__right">
                <div className="res-metric">
                  <div className="res-metric__val">{ratio(roiMultiplier)}</div>
                  <div className="res-metric__label">ROI incl. recovery</div>
                </div>
                <div className="res-metric">
                  <div className="res-metric__val">{agentsRequired}</div>
                  <div className="res-metric__label">Agents replaced</div>
                </div>
                <div className="res-metric">
                  <div className="res-metric__val">{inr(netMonthlyBenefit)}</div>
                  <div className="res-metric__label">Net monthly benefit</div>
                </div>
              </div>
            </div>

            {/* ── 6-tile grid ── */}
            <div className="res-grid">
              <div className="res-card res-card--hero">
                <div className="res-card__label">Monthly Savings</div>
                <div className="res-card__value">{inr(monthlySavings)}</div>
                <div className="res-card__note">{pct(savingsPct)} cost reduction</div>
              </div>
              <div className="res-card">
                <div className="res-card__label">Annual Savings</div>
                <div className="res-card__value">{inr(annualSavings)}</div>
                <div className="res-card__note">across 12 months</div>
              </div>
              <div className="res-card">
                <div className="res-card__label">ROI Multiplier</div>
                <div className="res-card__value">{ratio(roiMultiplier)}</div>
                <div className="res-card__note">net benefit ÷ AI cost</div>
              </div>
              <div className="res-card">
                <div className="res-card__label">Agents Required</div>
                <div className="res-card__value">{agentsRequired}</div>
                <div className="res-card__note">vs 1 AI agent</div>
              </div>
              <div className="res-card">
                <div className="res-card__label">Monthly AI Cost</div>
                <div className="res-card__value">{inr(aiMonthlyCost)}</div>
                <div className="res-card__note">pay per minute only</div>
              </div>
              <div className="res-card">
                <div className="res-card__label">Cost / Connected Call</div>
                <div className="res-card__value">{inr2(aiCostPerCall)}</div>
                <div className="res-card__note">vs {inr2(humanCostPerCall)} human</div>
              </div>
            </div>

            {/* ── Bar charts ── */}
            <div className="res-charts">
              <div className="res-chart">
                <div className="res-chart__title">Monthly Cost</div>
                <div className="res-bar-group">
                  <div className="res-bar-label">Human Team</div>
                  <div className="res-bar-track">
                    <div className="res-bar-fill res-bar-fill--human" style={{ width: `${Math.max((humanMonthlyCost / maxCost) * 100, 2)}%` }} />
                  </div>
                  <div className="res-bar-val">{inr(humanMonthlyCost)}</div>
                </div>
                <div className="res-bar-group">
                  <div className="res-bar-label">Alterity AI</div>
                  <div className="res-bar-track">
                    <div className="res-bar-fill res-bar-fill--ai" style={{ width: `${Math.max((aiMonthlyCost / maxCost) * 100, 2)}%` }} />
                  </div>
                  <div className="res-bar-val">{inr(aiMonthlyCost)}</div>
                </div>
              </div>
              <div className="res-chart">
                <div className="res-chart__title">Cost per Connected Call</div>
                <div className="res-bar-group">
                  <div className="res-bar-label">Human Team</div>
                  <div className="res-bar-track">
                    <div className="res-bar-fill res-bar-fill--human" style={{ width: `${Math.max((humanCostPerCall / maxCPC) * 100, 2)}%` }} />
                  </div>
                  <div className="res-bar-val">{inr2(humanCostPerCall)}</div>
                </div>
                <div className="res-bar-group">
                  <div className="res-bar-label">Alterity AI</div>
                  <div className="res-bar-track">
                    <div className="res-bar-fill res-bar-fill--ai" style={{ width: `${Math.max((aiCostPerCall / maxCPC) * 100, 2)}%` }} />
                  </div>
                  <div className="res-bar-val">{inr2(aiCostPerCall)}</div>
                </div>
              </div>
            </div>

            {/* ── Cost breakdown ── */}
            <div className="res-section">
              <div className="res-section__title">Cost Breakdown</div>
              <div className="res-two-col">
                <div className="res-col">
                  <div className="res-col__head res-col__head--human">Human Team ({agentsRequired} agents)</div>
                  <BRow label="Salary / agent"            val={inr(salaryPerAgent)} />
                  <BRow label="PF + ESI"                  val={inr(pfEsi)} />
                  <BRow label="Incentives"                val={inr(incentives)} />
                  <BRow label="Telephony / Dialer"        val={inr(telephony)} />
                  <BRow label="Seat + Office"             val={inr(seatCost)} />
                  <BRow label="Supervisor Allocation"     val={inr(supervisorAlloc)} />
                  <BRow label="Training (amortised)"      val={inr(trainingAmortized)} />
                  <BRow label="Attrition (amortised)"     val={inr(attritionAmortized)} />
                  <BRow label="Fully Loaded / Agent / Mo" val={inr(fullyLoadedPerAgent)} bold />
                  <BRow label="Total Monthly"             val={inr(humanMonthlyCost)}   bold />
                  <BRow label="Cost per Connected Call"   val={inr2(humanCostPerCall)}  bold />
                </div>
                <div className="res-col">
                  <div className="res-col__head res-col__head--ai">Alterity AI (1 agent)</div>
                  <BRow label="Total Connected Calls"  val={totalConnectedCalls.toLocaleString('en-IN')} />
                  <BRow label="Avg Call Duration"      val={`${aiCallDurationSec}s (${aiCallDurationMin.toFixed(2)} min)`} />
                  <BRow label="Total Minutes Billed"   val={totalAiMinutes.toLocaleString('en-IN') + ' min'} />
                  <BRow label="Rate per Minute"        val={'₹' + aiRatePerMinute.toFixed(1) + '/min'} />
                  <BRow label="SaaS / Platform Fee"    val="₹0" />
                  <BRow label="Per-Call Fee"           val="₹0" />
                  <BRow label="Total Monthly"          val={inr(aiMonthlyCost)}  bold />
                  <BRow label="Cost per Connected Call" val={inr2(aiCostPerCall)} bold />
                </div>
              </div>
            </div>

            {/* ── Recovery impact ── */}
            <div className="res-section">
              <div className="res-section__title">Recovery Impact</div>
              <div className="res-two-col">
                <div className="res-col">
                  <div className="res-col__head res-col__head--human">Without AI</div>
                  <BRow label="Recovery Rate"          val={pct(crFrac * 100)} />
                  <BRow label="Accounts Recovered"     val={Math.round(accountsRecoveredNow).toLocaleString('en-IN')} />
                  <BRow label="Recovery Value / Month" val={inr(recoveryValueNow)} bold />
                </div>
                <div className="res-col">
                  <div className="res-col__head res-col__head--ai">With Alterity AI</div>
                  <BRow label="Recovery Rate"          val={pct(newRecoveryRate * 100) + (crFrac + upliftFrac > 0.85 ? ' (capped)' : '')} />
                  <BRow label="Accounts Recovered"     val={Math.round(accountsRecoveredAI).toLocaleString('en-IN')} />
                  <BRow label="Recovery Value / Month" val={inr(recoveryValueAI)}    bold />
                  <BRow label="Additional Recovery"    val={inr(additionalRecovery)} bold />
                </div>
              </div>
              <div className="res-net-row">
                <span>Net Monthly Benefit (savings + extra recovery)</span>
                <span className="res-net-row__val">{inr(netMonthlyBenefit)}</span>
              </div>
            </div>

            {/* ── Head-to-head ── */}
            <div className="res-section">
              <div className="res-section__title">Head-to-Head</div>
              <table className="hth-table">
                <thead>
                  <tr>
                    <th>Factor</th>
                    <th className="hth-head--human">Human Team</th>
                    <th className="hth-head--ai">Alterity AI</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Monthly Cost',     inr(humanMonthlyCost),                         inr(aiMonthlyCost)],
                    ['Cost per Call',    inr2(humanCostPerCall),                         inr2(aiCostPerCall)],
                    ['Cost Ratio',       ratio(costRatio) + '× more expensive',          'Baseline'],
                    ['Team Size',        agentsRequired + ' agents',                     '1 AI agent'],
                    ['Monthly Calls',    totalConnectedCalls.toLocaleString('en-IN'),    totalConnectedCalls.toLocaleString('en-IN') + ' (same)'],
                    ['Availability',     '8–10 hrs / day',                               '24 / 7 / 365'],
                    ['Script Accuracy',  '60–80%',                                       '100%'],
                    ['Pricing Model',    'Fixed salary (risk)',                          'Pay per minute'],
                    ['Scale-up',         'Hire + train (weeks)',                         'Instant'],
                    ['Attrition Risk',   '30–50% / year',                               'Zero'],
                    ['Recovery Rate',    pct(crFrac * 100),                              pct(newRecoveryRate * 100)],
                  ].map(([factor, human, ai]) => (
                    <tr key={factor} className="hth-row">
                      <td className="hth-row__factor">{factor}</td>
                      <td className="hth-row__human">{human}</td>
                      <td className="hth-row__ai hth-row__winner">{ai}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* ── Recalculate CTA ── */}
            <div className="res-cta">
              <FlowButton variant="outlined" onClick={() => { setStep(0); setCalculated(false) }}>
                Adjust Inputs & Recalculate
              </FlowButton>
            </div>

          </div>
        )}

      </div>
    </div>
  )
}
