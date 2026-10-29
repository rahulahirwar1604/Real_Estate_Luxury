/**
 * Luxury Real Estate Ambient Audio Generator
 * Built with native Web Audio API - no external assets required.
 */
class AmbientAudioController {
  constructor() {
    this.ctx = null;
    this.isPlaying = false;
    this.masterGain = null;
    this.droneGain = null;
    this.oscillators = [];
    this.isMuted = true;
  }

  init() {
    if (this.ctx) return;
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!AudioContext) return;
    this.ctx = new AudioContext();

    // Master volume
    this.masterGain = this.ctx.createGain();
    this.masterGain.gain.setValueAtTime(0.001, this.ctx.currentTime);
    this.masterGain.connect(this.ctx.destination);

    // Warm Lowpass filter for smooth organic warmth
    this.filter = this.ctx.createBiquadFilter();
    this.filter.type = 'lowpass';
    this.filter.frequency.setValueAtTime(280, this.ctx.currentTime);
    this.filter.Q.setValueAtTime(1.5, this.ctx.currentTime);
    this.filter.connect(this.masterGain);

    // Drone gain
    this.droneGain = this.ctx.createGain();
    this.droneGain.gain.setValueAtTime(0.35, this.ctx.currentTime);
    this.droneGain.connect(this.filter);

    // Ethereal chord frequencies (F# minor / C# maj9 chord - deep & celestial)
    const baseFreqs = [55.0, 110.0, 164.81, 220.0, 277.18]; // F#1, F#2, E3, A3, C#4

    baseFreqs.forEach((freq, idx) => {
      const osc = this.ctx.createOscillator();
      const oscGain = this.ctx.createGain();

      osc.type = idx % 2 === 0 ? 'sine' : 'triangle';
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime);

      // Subtle detune for lush chorus shimmer
      osc.detune.setValueAtTime((Math.random() - 0.5) * 8, this.ctx.currentTime);

      oscGain.gain.setValueAtTime(0.12 / (idx + 1), this.ctx.currentTime);
      osc.connect(oscGain);
      oscGain.connect(this.droneGain);

      osc.start();
      this.oscillators.push(osc);
    });
  }

  toggle() {
    if (!this.ctx) {
      this.init();
    }

    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }

    if (this.isPlaying) {
      this.pause();
    } else {
      this.play();
    }

    return this.isPlaying;
  }

  play() {
    if (!this.ctx) this.init();
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }

    this.isPlaying = true;
    this.masterGain.gain.cancelScheduledValues(this.ctx.currentTime);
    this.masterGain.gain.setValueAtTime(this.masterGain.gain.value, this.ctx.currentTime);
    this.masterGain.gain.exponentialRampToValueAtTime(0.28, this.ctx.currentTime + 2.0);
  }

  pause() {
    if (!this.ctx) return;
    this.isPlaying = false;
    this.masterGain.gain.cancelScheduledValues(this.ctx.currentTime);
    this.masterGain.gain.setValueAtTime(this.masterGain.gain.value, this.ctx.currentTime);
    this.masterGain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + 1.2);
  }

  playMilestoneChime(pitchMultiplier = 1) {
    if (!this.isPlaying || !this.ctx) return;

    try {
      const chimeOsc = this.ctx.createOscillator();
      const chimeGain = this.ctx.createGain();

      chimeOsc.type = 'sine';
      // Harmonic crystal chime note around 880Hz * multiplier
      const baseNote = 659.25; // E5
      chimeOsc.frequency.setValueAtTime(baseNote * pitchMultiplier, this.ctx.currentTime);

      chimeGain.gain.setValueAtTime(0.001, this.ctx.currentTime);
      chimeGain.gain.exponentialRampToValueAtTime(0.14, this.ctx.currentTime + 0.05);
      chimeGain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + 1.8);

      chimeOsc.connect(chimeGain);
      chimeGain.connect(this.masterGain);

      chimeOsc.start();
      chimeOsc.stop(this.ctx.currentTime + 2.0);
    } catch {
      // Audio node cleanup safeguard
    }
  }
}

export const ambientAudio = new AmbientAudioController();
