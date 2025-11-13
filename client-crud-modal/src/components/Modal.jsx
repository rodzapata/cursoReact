import { motion, AnimatePresence } from 'framer-motion'

export default function Modal({ show, onClose, children }) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"          initial={{ opacity: 0 }}          animate={{ opacity: 1 }}          exit={{ opacity: 0 }}        >
          <motion.div
            className="bg-white rounded-xl shadow-lg w-11/12 max-w-lg p-6 relative"            initial={{ scale: 0.9, opacity: 0 }}            animate={{ scale: 1, opacity: 1 }}            exit={{ scale: 0.9, opacity: 0 }}            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
          >
            <button onClick={onClose} className="absolute top-3 right-3 text-gray-500 hover:text-black">✕</button>
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
