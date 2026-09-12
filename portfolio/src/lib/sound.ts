// ═══════════════════════════════════════════════════════════════
// PURE SYNTHESIZED WEB AUDIO ENGINE — Zero External Assets
// ═══════════════════════════════════════════════════════════════

class SoundEngine {
  private ctx: AudioContext | null = null;
  private ambientOsc1: OscillatorNode | null = null;
  private ambientOsc2: OscillatorNode | null = null;
  private ambientGain: GainNode | null = null;
  private isAmbientPlaying = false;

  private init() {
    if (!this.ctx && typeof window !== 'undefined') {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume().catch(() => {});
    }
  }

  // Tactile micro-click for buttons and links
  playClick(freq = 800) {
    try {
      this.init();
      if (!this.ctx) return;

      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(freq * 0.25, this.ctx.currentTime + 0.025);

      gain.gain.setValueAtTime(0.06, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + 0.025);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start();
      osc.stop(this.ctx.currentTime + 0.025);
    } catch {
      // AudioContext unavailable or blocked
    }
  }

  // Harmonic chord chime for Mind Scan activation or mode switch
  playScanChime() {
    try {
      this.init();
      if (!this.ctx) return;

      const freqs = [392, 523.25, 659.25, 783.99]; // G4, C5, E5, G5
      freqs.forEach((freq, i) => {
        if (!this.ctx) return;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, this.ctx.currentTime + i * 0.06);

        gain.gain.setValueAtTime(0, this.ctx.currentTime);
        gain.gain.linearRampToValueAtTime(0.04, this.ctx.currentTime + i * 0.06 + 0.02);
        gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + i * 0.06 + 0.5);

        osc.connect(gain);
        gain.connect(this.ctx.destination);

        osc.start(this.ctx.currentTime + i * 0.06);
        osc.stop(this.ctx.currentTime + i * 0.06 + 0.55);
      });
    } catch {}
  }

  // Soft toggle feedback
  playToggle(on: boolean) {
    try {
      this.init();
      if (!this.ctx) return;

      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'triangle';
      const startF = on ? 350 : 520;
      const endF = on ? 520 : 350;

      osc.frequency.setValueAtTime(startF, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(endF, this.ctx.currentTime + 0.05);

      gain.gain.setValueAtTime(0.05, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + 0.06);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start();
      osc.stop(this.ctx.currentTime + 0.06);
    } catch {}
  }

  // Soft hover micro-tone
  playHover(freq = 440) {
    try {
      this.init();
      if (!this.ctx) return;

      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(freq * 1.2, this.ctx.currentTime + 0.05);

      gain.gain.setValueAtTime(0.02, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + 0.05);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start();
      osc.stop(this.ctx.currentTime + 0.055);
    } catch {}
  }

  // Deep cybernetic scan frequency sweep
  playScan() {
    try {
      this.init();
      if (!this.ctx) return;

      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const filter = this.ctx.createBiquadFilter();
      const gain = this.ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(280, now);
      osc.frequency.linearRampToValueAtTime(740, now + 0.4);
      osc.frequency.linearRampToValueAtTime(440, now + 0.8);

      filter.type = 'bandpass';
      filter.frequency.setValueAtTime(500, now);
      filter.Q.setValueAtTime(4, now);

      gain.gain.setValueAtTime(0.04, now);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.85);

      osc.connect(filter);
      filter.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now);
      osc.stop(now + 0.9);
    } catch {}
  }

  // Harmonic chord / arpeggio sweep
  playArp(frequencies = [440, 554, 659, 880]) {
    try {
      this.init();
      if (!this.ctx) return;

      const startTime = this.ctx.currentTime;
      frequencies.forEach((freq, idx) => {
        if (!this.ctx) return;
        const noteTime = startTime + idx * 0.07;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, noteTime);

        gain.gain.setValueAtTime(0.035, noteTime);
        gain.gain.exponentialRampToValueAtTime(0.0001, noteTime + 0.25);

        osc.connect(gain);
        gain.connect(this.ctx.destination);

        osc.start(noteTime);
        osc.stop(noteTime + 0.28);
      });
    } catch {}
  }

  // Gentle subtle whoosh for page transitions
  playWhoosh() {
    try {
      this.init();
      if (!this.ctx) return;

      const bufferSize = this.ctx.sampleRate * 0.15;
      const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
      const data = buffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
        data[i] = Math.random() * 2 - 1;
      }

      const noise = this.ctx.createBufferSource();
      noise.buffer = buffer;

      const filter = this.ctx.createBiquadFilter();
      filter.type = 'bandpass';
      filter.frequency.setValueAtTime(300, this.ctx.currentTime);
      filter.frequency.exponentialRampToValueAtTime(1200, this.ctx.currentTime + 0.08);
      filter.frequency.exponentialRampToValueAtTime(200, this.ctx.currentTime + 0.15);

      const gain = this.ctx.createGain();
      gain.gain.setValueAtTime(0.0001, this.ctx.currentTime);
      gain.gain.linearRampToValueAtTime(0.025, this.ctx.currentTime + 0.06);
      gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + 0.15);

      noise.connect(filter);
      filter.connect(gain);
      gain.connect(this.ctx.destination);

      noise.start();
      noise.stop(this.ctx.currentTime + 0.15);
    } catch {}
  }

  // Gentle ambient sub-drone when sound is active
  startAmbient() {
    if (this.isAmbientPlaying) return;
    try {
      this.init();
      if (!this.ctx) return;

      this.ambientOsc1 = this.ctx.createOscillator();
      this.ambientOsc2 = this.ctx.createOscillator();
      this.ambientGain = this.ctx.createGain();
      const filter = this.ctx.createBiquadFilter();

      this.ambientOsc1.type = 'sine';
      this.ambientOsc1.frequency.setValueAtTime(55, this.ctx.currentTime); // A1 note

      this.ambientOsc2.type = 'sine';
      this.ambientOsc2.frequency.setValueAtTime(82.4, this.ctx.currentTime); // E2 note

      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(140, this.ctx.currentTime);

      this.ambientGain.gain.setValueAtTime(0.0001, this.ctx.currentTime);
      this.ambientGain.gain.linearRampToValueAtTime(0.02, this.ctx.currentTime + 3.0);

      this.ambientOsc1.connect(filter);
      this.ambientOsc2.connect(filter);
      filter.connect(this.ambientGain);
      this.ambientGain.connect(this.ctx.destination);

      this.ambientOsc1.start();
      this.ambientOsc2.start();
      this.isAmbientPlaying = true;
    } catch {}
  }

  stopAmbient() {
    if (!this.isAmbientPlaying || !this.ambientGain || !this.ctx) return;
    try {
      this.ambientGain.gain.linearRampToValueAtTime(0.0001, this.ctx.currentTime + 1.0);
      setTimeout(() => {
        this.ambientOsc1?.stop();
        this.ambientOsc2?.stop();
        this.ambientOsc1?.disconnect();
        this.ambientOsc2?.disconnect();
        this.ambientGain?.disconnect();
        this.isAmbientPlaying = false;
      }, 1000);
    } catch {
      this.isAmbientPlaying = false;
    }
  }
}

export const sound = new SoundEngine();

export function playSound(_type?: 'click' | 'hover' | 'toggle' | 'scan' | 'whoosh') {
  // Silent by default for a clean, distraction-free, professional engineering experience
  return;
}

