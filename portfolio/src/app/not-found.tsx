'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="notfound-root">
      {/* ── 15. 404 PAGE (Panel 15) ─────────────────────────────────── */}
      <section className="notfound-container">
        {/* Left Column: 404 Typography & Action */}
        <div className="notfound-left-col">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <span className="notfound-huge-num">404</span>
          </motion.div>

          <motion.h1
            className="notfound-title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            LOST IN THE SYSTEM.
          </motion.h1>

          <motion.p
            className="notfound-desc"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
          >
            Even great explorers often find new paths.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <Link href="/" className="return-home-btn">
              <span>Return Home</span>
              <ArrowRight size={14} />
            </Link>
          </motion.div>
        </div>

        {/* Right Column: Astronaut on Cosmic Moon Rock */}
        <div className="notfound-right-col">
          <motion.div
            className="astronaut-card"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="astronaut-img-wrap">
              <Image
                src="/images/astronaut-404.jpg"
                alt="Astronaut lost in space"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 600px"
                style={{ objectFit: 'cover' }}
              />
              <div className="astronaut-fade-overlay" />
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
