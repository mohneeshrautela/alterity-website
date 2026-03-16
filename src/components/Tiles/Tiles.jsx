import { motion } from 'framer-motion'
import './Tiles.css'

function Tiles({ rows = 40, cols = 25 }) {
  const rowsArray = new Array(rows).fill(null)
  const colsArray = new Array(cols).fill(null)

  return (
    <div className="tiles-wrap">
      {rowsArray.map((_, i) => (
        <div key={i} className="tiles-col">
          {colsArray.map((_, j) => (
            <motion.div
              key={j}
              className="tiles-cell"
              whileHover={{
                backgroundColor: 'rgba(29,18,5,0.045)',
                transition: { duration: 0 },
              }}
              animate={{ transition: { duration: 2 } }}
            />
          ))}
        </div>
      ))}
    </div>
  )
}

export default Tiles
