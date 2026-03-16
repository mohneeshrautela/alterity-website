import { useState } from 'react'
import './CalculatorPage.css'

/* ── Helpers ─────────────────────────────────────────── */
const inr  = (n) => '₹' + Math.round(n).toLocaleString('en-IN')
const inr2 = (n) => '₹' + n.toFixed(2)
const pct  = (n) => n.toFixed(1) + '%'
const ratio= (n) => n.toFixed(1) + 'x'

/* ── Sub-components ──────────────────────────────────── */
function SliderField({ label, value, min, max, step, onChange, display, hint }) {
  return (
    <div className="sf">
      <div className="sf__top">
        <span className="sf__label">{label}{hint && <span className="sf__hint"> — {hint}</span>}</span>
        <span className="sf__value">{display(value)}</span>
      </div>
      <input className="sf__slider" type="range" min={min} max={max} step={step}
        value={value} onChange={(e) => onChange(Number(e.target.value))} />
      <div className="sf__range"><span>{display(min)}</span><span>{display(max)}</span></div>
    </div>
  )
}

function BarRow({ label, widthPct, displayVal, type }) {
  return (
    <div className="bar-row">
      <div className="bar-row__label">{label}</div>
      <div className="bar-row__track">
        <div className={`bar-row__fill bar-row__fill--${type}`} style={{ width: `${Math.max(widthPct, 2)}%` }} />
      </div>
      <div className="bar-row__val">{displayVal}</div>
    </div>
  )
}

function BRow({ label, value, bold, indent }) {
  return (
    <div className={`brow ${bold ? 'brow--bold' : ''} ${indent ? 'brow--indent' : ''}`}>
      <span className="brow__label">{label}</span>
      <span className="brow__val">{value}</span>
    </div>
  )
}

function CompRow({ factor, human, ai, aiWins }) {
  return (
    <tr className="comp-row">
      <td className="comp-row__factor">{factor}</td>
      <td className={`comp-row__human ${!aiWins ? 'comp-row__winner' : ''}`}>{human}</td>
      <td className={`comp-row__ai   ${ aiWins ? 'comp-row__winner' : ''}`}>{ai}</td>
    </tr>
  )
}

/* ── Main Component ──────────────────────────────────── */
export default function CalculatorPage() {

  /* VOLUME */
  const [accountsPerMonth,     setAccountsPerMonth]     = useState(20000)
  const [attemptsPerAccount,   setAttemptsPerAccount]   = useState(3)
  const [workingDays,          setWorkingDays]          = useState(24)

  /* HUMAN TEAM */
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
  const [aiRatePerMinute,      setAiRatePerMinute]      = useState(10)
  const [aiCallDurationSec,    setAiCallDurationSec]    = useState(75)

  /* RECOVERY */
  const [avgLoanAmount,        setAvgLoanAmount]        = useState(50000)
  const [currentRecoveryRate,  setCurrentRecoveryRate]  = useState(35)   // stored as %
  const [aiRecoveryUplift,     setAiRecoveryUplift]     = useState(15)   // stored as %

  /* ── STEP 1: Total calls ──────────────────────────── */
  const totalConnectedCalls = accountsPerMonth * attemptsPerAccount

  /* ── STEP 2: Human team sizing ────────────────────── */
  const connectedCallsPerMonthPerAgent = connectedCallsPerDay * workingDays
  const agentsRequired = Math.max(1, Math.ceil(totalConnectedCalls / connectedCallsPerMonthPerAgent))

  /* ── STEP 3: Human monthly cost ───────────────────── */
  const fullyLoadedPerAgent = salaryPerAgent + pfEsi + incentives + telephony
                            + seatCost + supervisorAlloc + trainingAmortized + attritionAmortized
  const humanMonthlyCost = agentsRequired * fullyLoadedPerAgent

  /* ── STEP 4: Human cost per call ──────────────────── */
  const humanCostPerCall = humanMonthlyCost / totalConnectedCalls

  /* ── STEP 5: AI monthly cost ──────────────────────── */
  const aiCallDurationMin = aiCallDurationSec / 60
  const totalAiMinutes    = Math.round(totalConnectedCalls * aiCallDurationMin)
  const aiMonthlyCost     = totalAiMinutes * aiRatePerMinute

  /* ── STEP 6: AI cost per call ─────────────────────── */
  const aiCostPerCall = aiMonthlyCost / totalConnectedCalls

  /* ── STEP 7: Savings ──────────────────────────────── */
  const aiMoreExpensive  = aiMonthlyCost > humanMonthlyCost
  const monthlySavings   = Math.max(0, humanMonthlyCost - aiMonthlyCost)
  const savingsPct       = humanMonthlyCost > 0 ? (monthlySavings / humanMonthlyCost) * 100 : 0
  const annualSavings    = monthlySavings * 12

  /* ── STEP 8: Cost ratio ───────────────────────────── */
  const costRatio = aiCostPerCall > 0 ? humanCostPerCall / aiCostPerCall : 0

  /* ── STEP 9: Recovery ROI ─────────────────────────── */
  const crFrac           = currentRecoveryRate / 100
  const upliftFrac       = aiRecoveryUplift / 100
  const newRecoveryRate  = Math.min(crFrac + upliftFrac, 0.85)

  const accountsRecoveredNow = accountsPerMonth * crFrac
  const recoveryValueNow     = accountsRecoveredNow * avgLoanAmount

  const accountsRecoveredAI  = accountsPerMonth * newRecoveryRate
  const recoveryValueAI      = accountsRecoveredAI * avgLoanAmount
  const additionalRecovery   = recoveryValueAI - recoveryValueNow

  /* ── STEP 10: Net benefit & ROI ───────────────────── */
  const netMonthlyBenefit = monthlySavings + additionalRecovery
  const roiMultiplier     = aiMonthlyCost > 0 ? netMonthlyBenefit / aiMonthlyCost : 0

  /* ── Chart scales ─────────────────────────────────── */
  const maxCost = Math.max(humanMonthlyCost, aiMonthlyCost)
  const maxCPC  = Math.max(humanCostPerCall,  aiCostPerCall)

  return (
    <div className="calc-page">
      <div className="calc-page__inner">

        <div className="calc-header">
          <h1 className="calc-header__title">ROI Calculator</h1>
          <p className="calc-header__sub">AI Voice Agents vs Human Telecallers — built for loan recovery operations</p>
        </div>

        <div className="calc-layout">

          {/* ── LEFT: INPUTS ─────────────────────────── */}
          <div className="calc-inputs-col">

            {/* Volume */}
            <div className="calc-input-card">
              <div className="calc-input-card__badge" style={{ background: 'rgba(29,18,5,0.08)', color: 'var(--dark)' }}>Call Volume</div>
              <SliderField label="Delinquent Accounts / Month" value={accountsPerMonth}   min={1000}  max={100000} step={1000} onChange={setAccountsPerMonth}   display={v => v.toLocaleString('en-IN')} />
              <SliderField label="Call Attempts per Account"   value={attemptsPerAccount} min={1}     max={10}     step={1}    onChange={setAttemptsPerAccount} display={v => v} hint="attempts before giving up" />
              <SliderField label="Working Days per Month"      value={workingDays}        min={20}    max={28}     step={1}    onChange={setWorkingDays}        display={v => v + ' days'} />
            </div>

            {/* Human team */}
            <div className="calc-input-card">
              <div className="calc-input-card__badge calc-input-card__badge--human">Human Telecaller Cost</div>
              <SliderField label="Salary per Agent (₹)"          value={salaryPerAgent}     min={10000} max={55000}  step={500}  onChange={setSalaryPerAgent}     display={v => '₹' + v.toLocaleString('en-IN')} />
              <SliderField label="PF + ESI (₹)"                  value={pfEsi}              min={1000}  max={8000}   step={250}  onChange={setPfEsi}              display={v => '₹' + v.toLocaleString('en-IN')} />
              <SliderField label="Incentives (₹)"                value={incentives}         min={0}     max={15000}  step={500}  onChange={setIncentives}         display={v => '₹' + v.toLocaleString('en-IN')} />
              <SliderField label="Telephony / Dialer (₹)"        value={telephony}          min={500}   max={6000}   step={250}  onChange={setTelephony}          display={v => '₹' + v.toLocaleString('en-IN')} />
              <SliderField label="Seat + Office Cost (₹)"        value={seatCost}           min={1000}  max={10000}  step={500}  onChange={setSeatCost}           display={v => '₹' + v.toLocaleString('en-IN')} />
              <SliderField label="Supervisor Allocation (₹)"     value={supervisorAlloc}    min={500}   max={6000}   step={250}  onChange={setSupervisorAlloc}    display={v => '₹' + v.toLocaleString('en-IN')} />
              <SliderField label="Training Cost Amortised (₹)"   value={trainingAmortized}  min={0}     max={6000}   step={250}  onChange={setTrainingAmortized}  display={v => '₹' + v.toLocaleString('en-IN')} />
              <SliderField label="Attrition Cost Amortised (₹)"  value={attritionAmortized} min={0}     max={8000}   step={250}  onChange={setAttritionAmortized} display={v => '₹' + v.toLocaleString('en-IN')} />
              <SliderField label="Connected Calls / Agent / Day" value={connectedCallsPerDay} min={20} max={100}    step={1}    onChange={setConnectedCallsPerDay} display={v => v} hint="40–55% connect rate in recovery" />
            </div>

            {/* AI */}
            <div className="calc-input-card">
              <div className="calc-input-card__badge calc-input-card__badge--ai">Alterity AI — Pay per Minute</div>
              <SliderField label="Rate per Minute (₹)"    value={aiRatePerMinute}  min={1}  max={20}  step={0.5} onChange={setAiRatePerMinute}  display={v => '₹' + v.toFixed(1) + '/min'} hint="no SaaS fee, no per-call fee" />
              <SliderField label="Avg Call Duration"      value={aiCallDurationSec} min={30} max={300} step={5}  onChange={setAiCallDurationSec} display={v => `${v}s (${(v/60).toFixed(2)} min)`} hint="60–90s typical for recovery" />
            </div>

            {/* Recovery */}
            <div className="calc-input-card">
              <div className="calc-input-card__badge" style={{ background: 'rgba(240,247,107,0.4)', color: 'var(--dark)' }}>Recovery Impact</div>
              <SliderField label="Avg Loan Amount (₹)"          value={avgLoanAmount}       min={5000}  max={500000} step={5000} onChange={setAvgLoanAmount}       display={v => '₹' + v.toLocaleString('en-IN')} />
              <SliderField label="Current Recovery Rate"        value={currentRecoveryRate} min={5}     max={80}     step={1}    onChange={setCurrentRecoveryRate} display={v => v + '%'} />
              <SliderField label="AI Recovery Uplift"           value={aiRecoveryUplift}    min={1}     max={40}     step={1}    onChange={setAiRecoveryUplift}    display={v => '+' + v + '%'} hint="capped at 85% total" />
            </div>

          </div>

          {/* ── RIGHT: RESULTS ───────────────────────── */}
          <div className="calc-results-col">

            {/* Warning banner */}
            {aiMoreExpensive && (
              <div className="calc-warning">
                ⚠ Adjust AI rate or call duration — AI cost exceeds human cost at these settings
              </div>
            )}

            {/* Summary tiles */}
            <div className="calc-summary">
              <div className="calc-tile calc-tile--hero">
                <div className="calc-tile__label">Monthly Savings</div>
                <div className="calc-tile__value">{inr(monthlySavings)}</div>
                <div className="calc-tile__sub">{pct(savingsPct)} cost reduction · {ratio(costRatio)} cheaper per call</div>
              </div>
              <div className="calc-tile">
                <div className="calc-tile__label">Annual Savings</div>
                <div className="calc-tile__value">{inr(annualSavings)}</div>
              </div>
              <div className="calc-tile">
                <div className="calc-tile__label">ROI (incl. recovery)</div>
                <div className="calc-tile__value">{ratio(roiMultiplier)}</div>
              </div>
              <div className="calc-tile">
                <div className="calc-tile__label">Agents Required</div>
                <div className="calc-tile__value">{agentsRequired}</div>
                <div className="calc-tile__note">for {totalConnectedCalls.toLocaleString('en-IN')} calls/mo</div>
              </div>
            </div>

            {/* Bar charts */}
            <div className="calc-charts">
              <div className="calc-chart-card">
                <h3 className="calc-chart-card__title">Monthly Cost</h3>
                <BarRow label="Human Team"  widthPct={(humanMonthlyCost / maxCost) * 100} displayVal={inr(humanMonthlyCost)} type="human" />
                <BarRow label="Alterity AI" widthPct={(aiMonthlyCost    / maxCost) * 100} displayVal={inr(aiMonthlyCost)}    type="ai"    />
              </div>
              <div className="calc-chart-card">
                <h3 className="calc-chart-card__title">Cost per Connected Call</h3>
                <BarRow label="Human Team"  widthPct={(humanCostPerCall / maxCPC) * 100} displayVal={inr2(humanCostPerCall)} type="human" />
                <BarRow label="Alterity AI" widthPct={(aiCostPerCall    / maxCPC) * 100} displayVal={inr2(aiCostPerCall)}    type="ai"    />
              </div>
            </div>

            {/* Cost breakdown */}
            <div className="calc-breakdown">
              <h3 className="calc-breakdown__title">Cost Breakdown</h3>
              <div className="calc-breakdown__cols">

                <div className="calc-breakdown__col">
                  <div className="calc-breakdown__col-head calc-breakdown__col-head--human">Human Team ({agentsRequired} agents)</div>
                  <BRow label="Salary"                  value={inr(salaryPerAgent)}     indent />
                  <BRow label="PF + ESI"                value={inr(pfEsi)}              indent />
                  <BRow label="Incentives"              value={inr(incentives)}         indent />
                  <BRow label="Telephony / Dialer"      value={inr(telephony)}          indent />
                  <BRow label="Seat + Office"           value={inr(seatCost)}           indent />
                  <BRow label="Supervisor Allocation"   value={inr(supervisorAlloc)}    indent />
                  <BRow label="Training (amortised)"    value={inr(trainingAmortized)}  indent />
                  <BRow label="Attrition (amortised)"   value={inr(attritionAmortized)} indent />
                  <BRow label="Fully Loaded / Agent"    value={inr(fullyLoadedPerAgent)} bold />
                  <BRow label="Total Monthly"           value={inr(humanMonthlyCost)}   bold />
                  <BRow label="Cost per Connected Call" value={inr2(humanCostPerCall)}  bold />
                </div>

                <div className="calc-breakdown__col">
                  <div className="calc-breakdown__col-head calc-breakdown__col-head--ai">Alterity AI (1 agent)</div>
                  <BRow label="Total Connected Calls"   value={totalConnectedCalls.toLocaleString('en-IN')} indent />
                  <BRow label="Avg Call Duration"       value={`${aiCallDurationSec}s (${aiCallDurationMin.toFixed(2)} min)`} indent />
                  <BRow label="Total Minutes Billed"    value={totalAiMinutes.toLocaleString('en-IN') + ' min'} indent />
                  <BRow label="Rate per Minute"         value={'₹' + aiRatePerMinute.toFixed(1) + '/min'} indent />
                  <BRow label="SaaS / Platform Fee"     value="₹0" indent />
                  <BRow label="Per-Call Fee"            value="₹0" indent />
                  <BRow label="Total Monthly"           value={inr(aiMonthlyCost)}  bold />
                  <BRow label="Cost per Connected Call" value={inr2(aiCostPerCall)} bold />
                </div>

              </div>
            </div>

            {/* Recovery ROI */}
            <div className="calc-breakdown">
              <h3 className="calc-breakdown__title">Recovery Impact</h3>
              <div className="calc-breakdown__cols">
                <div className="calc-breakdown__col">
                  <div className="calc-breakdown__col-head calc-breakdown__col-head--human">Without AI</div>
                  <BRow label="Recovery Rate"           value={pct(crFrac * 100)} indent />
                  <BRow label="Accounts Recovered"      value={Math.round(accountsRecoveredNow).toLocaleString('en-IN')} indent />
                  <BRow label="Recovery Value / Month"  value={inr(recoveryValueNow)} bold />
                </div>
                <div className="calc-breakdown__col">
                  <div className="calc-breakdown__col-head calc-breakdown__col-head--ai">With Alterity AI</div>
                  <BRow label="Recovery Rate"           value={pct(newRecoveryRate * 100) + (crFrac + upliftFrac > 0.85 ? ' (capped)' : '')} indent />
                  <BRow label="Accounts Recovered"      value={Math.round(accountsRecoveredAI).toLocaleString('en-IN')} indent />
                  <BRow label="Recovery Value / Month"  value={inr(recoveryValueAI)} bold />
                  <BRow label="Additional Recovery"     value={inr(additionalRecovery)} bold />
                </div>
              </div>
              <div className="calc-breakdown__total-row">
                <span>Net Monthly Benefit (savings + extra recovery)</span>
                <span className="calc-breakdown__total-val">{inr(netMonthlyBenefit)}</span>
              </div>
            </div>

            {/* Comparison table */}
            <div className="calc-comparison">
              <h3 className="calc-comparison__title">Head-to-Head</h3>
              <table className="comp-table">
                <thead>
                  <tr>
                    <th>Factor</th>
                    <th className="comp-table__human-head">Human Team</th>
                    <th className="comp-table__ai-head">Alterity AI</th>
                  </tr>
                </thead>
                <tbody>
                  <CompRow factor="Monthly Cost"          human={inr(humanMonthlyCost)}    ai={inr(aiMonthlyCost)}                aiWins />
                  <CompRow factor="Cost per Call"         human={inr2(humanCostPerCall)}   ai={inr2(aiCostPerCall)}               aiWins />
                  <CompRow factor="Cost Ratio"            human={ratio(costRatio) + ' more expensive'} ai="Baseline"              aiWins />
                  <CompRow factor="Team Size"             human={agentsRequired + ' agents'} ai="1 AI agent"                     aiWins />
                  <CompRow factor="Calls / Month"         human={totalConnectedCalls.toLocaleString('en-IN')} ai={totalConnectedCalls.toLocaleString('en-IN') + ' (same)'} aiWins />
                  <CompRow factor="Availability"          human="8–10 hrs/day"             ai="24 / 7 / 365"                     aiWins />
                  <CompRow factor="Script Accuracy"       human="60–80%"                   ai="100%"                             aiWins />
                  <CompRow factor="Pricing Model"         human="Fixed salary (risk)"      ai="Pay per minute (no waste)"        aiWins />
                  <CompRow factor="Scale-up"              human="Hire + train (weeks)"     ai="Instant"                          aiWins />
                  <CompRow factor="Attrition Risk"        human="30–50% / year"            ai="Zero"                             aiWins />
                  <CompRow factor="Recovery Rate"         human={pct(crFrac * 100)}        ai={pct(newRecoveryRate * 100)}       aiWins />
                </tbody>
              </table>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}
