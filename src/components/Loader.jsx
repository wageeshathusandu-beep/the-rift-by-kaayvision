import { motion, AnimatePresence } from 'framer-motion'

export default function Loader({ isLoading }) {
  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          className="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-void"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
            className="text-center"
          >
            <motion.h1
              className="font-display text-4xl md:text-6xl font-black tracking-wider text-c-white mb-4"
              animate={{ textShadow: ['0 0 10px rgba(0,229,255,0.3)', '0 0 30px rgba(0,229,255,0.6)', '0 0 10px rgba(0,229,255,0.3)'] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            >
              THE RIFT
            </motion.h1>
            <motion.div
              className="w-48 h-[2px] mx-auto bg-gradient-to-r from-transparent via-c-cyan to-transparent"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1.2, ease: [0.4, 0, 0.2, 1], delay: 0.3 }}
            />
            <motion.p
              className="font-mono text-[10px] uppercase tracking-[0.4em] text-c-muted/50 mt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              Loading Experience
            </motion.p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
