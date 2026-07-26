---
layout: post
title: "How to Fix Clipped and Distorted Audio"
description: "How to fix clipped and distorted audio: what declipping can and cannot recover, how to tell clipping from other crackle, and the levels that prevent it."
date: 2026-07-26
categories: [utilities]
tags: [clipping, distortion, declipping, audio-repair, audio-enhancement, true-peak, recording-levels]
silo: audio-enhancement
pillar: audio-enhancement
related_apps: [soundspice, transcribe, cuevoice, equipt]
---

The interview is finished, the guest has flown home, and you are listening back for the first time. Everything is fine for ninety seconds. Then she laughs, and the laugh arrives as gravel. She laughs again at 4:12, and at 11:40, and every time the sound tears. You cannot re-record it.

Or it is a gig you filmed on a phone, where the verses are lovely and the chorus turns to sandpaper. Or a voice memo of a doctor telling you three things, and the sentence that mattered was the one she raised her voice for.

This is clipping, and the honest answer sits between the two things people believe. No, it cannot be undone. Yes, mild cases repair so well you will not hear the join. Which you get depends on facts you can check in two minutes.

## What clipping actually is

Full scale, written 0 dBFS, is the largest number a digital audio format can represent, and there is nothing above it. When the signal asks for more, the converter writes the biggest value it has and keeps writing it until the signal drops back into range. On a waveform this looks exactly like what it is: the rounded top of a peak sliced off and replaced with a flat plateau.

### Digital clipping versus analogue overdrive

Two different faults get called clipping, and telling them apart decides whether repair is worth attempting.

**Digital clipping** happens at the converter, or in a digital gain stage after it. It is abrupt: the signal is in range, then pinned at full scale, then in range again. That produces the textbook flat top, and it is what declipping tools are built for, because the shape of what is missing is predictable from what surrounds it.

**Analogue clipping**, also called overdrive or saturation, happens earlier: a capsule pushed past the sound pressure level it can handle, or a preamp out of voltage swing. Its knee is softer, and in music it is often deliberate. For speech it is the worse of the two, because it happened before the file existed — what your converter faithfully recorded was already distorted, so there is no flattened plateau to reconstruct.

### Why it sounds harsh rather than just loud

The instinct is to call clipped audio "too loud" and reach for a volume control, but clipping does not add level; it adds content. Clip a sine wave hard enough and you approach a square wave, which is not one frequency but the original tone plus a stack of harmonics above it. Every sharp corner in a waveform is high-frequency energy that was not in the original sound, and with many frequencies present at once the process also generates sums and differences between them that read as grit. A good deal lands in the upper midrange, where hearing is most sensitive, which is why clipped speech is not merely unpleasant but tiring.

## Diagnose it before you process anything

Several very different problems present as "crackle", and each has a different fix. Reaching for a tool before identifying which one you have is how people lose an afternoon.

Open the file in anything that zooms to sample level and look at the loudest passages. You want flat tops, and runs of consecutive samples holding the same value at or near full scale. The contrast that matters: a file peaking at exactly 0.0 dBFS repeatedly, and sitting there for stretches, is clipped, while a file peaking at −0.1 dBFS on one transient is not clipped at all, only hot.

One caveat: MP3 and AAC encoding rounds those plateaus, so look for the pattern, not exact equality. And if one side of the waveform is flattened while the other still has headroom, you have a DC offset problem, which changes what you do next.

| What you hear | Likely cause | The fix |
|---|---|---|
| Grit only on the loudest syllables | Clipping | Declip, then tame the harshness |
| Isolated ticks unrelated to level | Bad cable or connector | A new cable; click removal, not declipping |
| Brief silences or stutters | Dropouts: full disk, flaky USB, CPU load | Nothing repairs these; re-record |
| Warbling or robotic patches | Bluetooth packet loss | Record wired |
| A thud on "p" and "b" | Plosives | High-pass, pop shield, speak across the mic |
| Distortion at every level | Capsule or preamp overload | Largely unrepairable; move back, use a pad |
| Steady buzz under everything | Mains hum at 50 or 60 Hz | Notch filtering — see [removing hum and buzz](/blog/utilities/how-to-remove-hum-buzz-from-recording-50-60hz/) |
| Steady hiss or room tone | Broadband noise | A measured profile — see [removing background noise](/blog/utilities/how-to-remove-background-noise-from-audio-recording/) |

## What declipping can and cannot do

Declipping does not restore anything, and any tool claiming it does is overselling. It reconstructs: it finds regions where samples are pinned at or near full scale, then interpolates a plausible waveform through the flattened stretch using the signal either side of it. Every method, from spline interpolation to sparse-representation modelling, rests on one assumption — that over a few milliseconds a real acoustic signal is reasonably predictable from its neighbours.

**It works well when the clipped stretches are short and isolated**: a handful of samples, or occasional transients like a snare hit, a laugh, one shouted word. The surrounding signal genuinely does describe the missing curve, so the reconstruction has little to invent and the result is often indistinguishable from a clean take.

**It works poorly in three cases.** When a large fraction of the file is clipped, because little undistorted signal remains to infer from. When the clipping is deep and sustained, because the algorithm is then inventing the missing peak rather than inferring it, and invention on that scale has its own sound. And when the distortion happened before the converter, because no algorithm recovers what was not recorded.

That last case is where expectations break, so say it plainly: a badly overdriven recording can be made less unpleasant, but not clean. For a mildly clipped interview, transparent is realistic; for a phone recording of a loud band, intelligible is a success.

## The order of repair matters more than the tools

Most bad outcomes come from doing the right things in the wrong sequence.

### Remove DC offset first

DC offset is a constant value added to the whole waveform, so the signal is no longer centred on zero. It comes from converter bias, a poor input stage, or a cheap USB microphone. You cannot hear it, but it eats headroom on one side only: shift a waveform upward and the positive peaks reach full scale well before the negative ones do. That is the asymmetric clipping described above, so finding asymmetry tells you the cause.

It also changes the fix, because recentring the waveform on zero brings some peaks back under the ceiling with no reconstruction at all. Rumble — the sub-audible energy from traffic and handling noise — belongs in the same early slot, because it is stealing headroom you would rather spend on the voice.

### Then declip, before any gain, EQ or loudness work

Declipping goes near the front because every later stage otherwise bakes the distortion in. EQ shapes the distortion products alongside the wanted signal, so the grit follows your tone curve. Normalisation scales everything uniformly, distortion included. And a limiter, which people reach for first, does nothing useful: it prevents *new* peaks from exceeding a ceiling and cannot rebuild peaks flattened before it saw them, so you get a quieter clipped file.

A workable order: DC offset and rumble, then declipping, then hum and broadband noise, then tonal correction and de-essing, then levelling, then loudness normalisation, and finally a true-peak limit on export.

## When declipping is not enough

Assume you have reconstructed what could be reconstructed and the file is still harsher than you want. Several moves help; none involves running the declipper harder.

**De-essing and a gentle high shelf.** Clipping adds high-frequency energy, so speech that was already sibilant becomes sharp. De-essing works on the roughly 5–8 kHz band where sibilance lives, and a modest shelf reduction above that takes the edge off without dulling the voice.

**A narrow cut where the distortion concentrates.** Sweep a narrow band through the upper midrange, often between 2 and 5 kHz, and you can usually find where the grit is worst. A small cut there buys a surprising amount of comfort; keep it small, since this is treating a symptom.

**Use a cleaner take of the same passage.** A second camera, a safety track, or the guest repeating herself later: borrow those seconds and crossfade. And if one shouted word is unrecoverable but the sentence survives without it, cut the word.

**Or let it be.** Where the crackle is brief and the speech intelligible, the right action is often nothing. Listeners forgive a moment of distortion far more readily than a whole episode of processing artefacts.

Clipped words are disproportionately the ones speech recognition gets wrong, because the distortion masks the consonant detail a model needs. If you want a transcript, clean the file before running it through [Transcribe](/apps/transcribe/) — see our guides to [transcribing audio and voice notes on iPhone](/blog/productivity/how-to-use-ai-to-transcribe-audio-and-voice-notes-on-iphone/) and to [preparing for doctor appointments with a chronic condition](/blog/health-wellness/how-to-prepare-doctor-appointments-chronic-condition/), where the sentence you most need is often the one that was emphasised.

## True peak, and the second round of clipping

Here is the trap for people who did everything else right: you declip carefully, raise the loudness for publication, export, and it is clipped again.

Samples are points, not the sound. On playback a converter reconstructs a continuous waveform through them, and between two samples that curve can rise higher than either. That excursion is an inter-sample peak, and a sample-peak meter cannot see it: a file reported as peaking at −0.2 dBFS can produce an analogue waveform over full scale, and a lossy encoder can push it further.

This is why loudness standards specify a *true peak* ceiling measured on an oversampled signal, as defined in ITU-R BS.1770, rather than a sample peak. EBU R128 sets a maximum permitted true peak level of −1 dBTP and the major streaming platforms have converged on the same figure — the margin that keeps inter-sample peaks and codec overshoot from clipping on someone else's hardware. Whatever you raise the loudness to, put a true-peak limiter after it at −1 dBTP. Our explainer on [LUFS and loudness normalisation for podcasts](/blog/utilities/lufs-loudness-normalization-podcast-explained/) covers why −14, −16 and −23 LUFS all exist and which your file should aim at.

## Doing it in SoundSpice

[SoundSpice](/apps/soundspice/) handles clipped peaks as part of an automatic repair pass rather than as a tool you have to find and configure. Drop a file in and analysis and repair begin at once, with no setup screen and no faders. Peak reconstruction sits in that pass alongside rumble removal, DC-offset removal and stereo-imbalance repair, so the sequencing above happens in the right order without you having to remember it.

It also reports rather than asserts. The plain-language "what changed" summary comes from the actual run and is written as *found*, then *applied*, so a stage that never fired is never claimed: if your file had no DC offset, it does not tell you it corrected one, and if it reconstructed clipping, it says so — the most useful diagnostic you can get about a suspect recording.

The measurements are the evidence. The before-and-after true peak figure in dBTP tells you where the file stood and where it now stands, and the spectrum comparison puts original and processed on one log frequency axis with the acted-on regions shaded, so you can see whether the harsh upper-mid content came down. On export, true peaks are limited to −1 dBTP, closing the second-clipping trap by default. The A/B is loudness-matched unless you turn that off, which matters here more than anywhere: clipped audio is loud audio, and an unmatched comparison flatters whichever version is louder.

Every stage carries guardrails and does less when in doubt, the right bias for damaged material, and the original file is never modified, so a failed attempt costs nothing. Our roundup of the [best audio enhancer and noise removal apps for iPhone, iPad and Mac](/blog/utilities/best-audio-enhancer-noise-removal-apps-iphone-ipad-mac/) sets out how an on-device tool compares with cloud services and desktop suites. And if the report confirms it reconstructed clipping but the file still sounds harsh, you are in the analogue-overdrive case: that harshness was recorded, not added.

{% include blog-cta.html app_slug="soundspice" %}

## Recording so it cannot happen again

Prevention is cheap, and almost entirely about headroom.

**Aim for peaks around −12 dBFS.** Not −3, not −6. Set gain so the loudest thing the source will actually do lands near −12 dBFS, leaving roughly 12 dB of margin for the laugh, the chorus, or the door slam nobody planned. A quiet-looking file is not a problem: loudness is set at the end.

**Record 24-bit.** Each bit of depth buys about 6 dB of theoretical dynamic range, so 16-bit gives around 96 dB and 24-bit around 144 dB. Real converters bottom out earlier because of their own analogue noise, but the conclusion holds: at 24-bit, recording 12 or 18 dB down puts you nowhere near the noise floor. The old habit of pushing levels high came from 16-bit, where headroom cost something.

**Watch the meter during the soundcheck, not during the take.** Set levels while they tell you what they had for breakfast, then look at your guest, not your screen.

**Use the pad, and the limiter if you have one.** A pad attenuates the signal ahead of the preamp, typically by 10 or 20 dB, and is the right answer for loud sources and anything at a gig. Many interfaces and recorders also include a hardware limiter that catches transients before the converter sees them.

**Use the safety or dual-record channel.** Many field recorders capture a second copy of the same input at a fixed lower level, often 12 or 20 dB down. It costs nothing but card space, and it turns "the laugh is destroyed" into "use the safety track for those four seconds".

**Beware automatic gain control.** Phones, action cameras and video apps frequently apply AGC, which lifts quiet passages and can pump when a loud one arrives. Where an app lets you disable it and set a manual level, do so.

**Keep track of your gear.** Knowing which interface has the pad, and which cable was the intermittent one, is easier from an inventory in something like [Equipt](/apps/equipt/) than from memory.

The cleanest recording is the one you did not have to redo. If your material is scripted, a voice-activated prompter like [CueVoice](/apps/cuevoice/) cuts the number of takes, and our roundup of the [best teleprompter apps for content creators and public speakers](/blog/productivity/best-teleprompter-apps-for-content-creators-and-public-speakers/) compares the options. If the recording is already made and the problem is broader than clipping, our walkthrough of [making a voice memo sound professional](/blog/utilities/make-voice-memo-sound-professional-iphone/) covers the whole cleanup, and [cleaning up a remote podcast interview](/blog/utilities/how-to-clean-up-remote-podcast-interview-audio/) deals with two people on two connections. Either way, [SoundSpice](/apps/soundspice/) leaves your original untouched.

## Frequently asked questions

### Can clipped audio be fully repaired?

Sometimes, when the clipping is shallow, brief and isolated: reconstruction then has enough surrounding signal to infer the missing peak. When a large share of the file is clipped, when the clipping is deep and sustained, or when the distortion happened before the converter, the answer is no — that information was never recorded. For badly clipped material, tolerable rather than clean is the target.

### Why does my recording crackle only on the loud parts?

That pattern is the signature of clipping: below the ceiling everything is captured normally, so only the flattened peaks distort. If the crackle appears regardless of level, or arrives as isolated ticks unrelated to what is being said, look at cables, connectors, dropouts or a wireless link instead.

### Does normalizing fix distortion?

No. Normalisation multiplies every sample by the same factor, so the manufactured harmonics scale up and down alongside the wanted signal. It changes how loud the distortion is, not whether it is there. Limiting is no better: a limiter can stop new peaks exceeding a ceiling but cannot rebuild peaks already flattened.

### What recording level should I use?

Set gain so the loudest sound the source will genuinely make peaks around −12 dBFS, leaving roughly 12 dB of headroom for the unexpected. Check it during a soundcheck with the source at its loudest rather than during the take, since loudness is set at the end and costs nothing to raise.

### Is 24-bit worth it?

For recording, yes, and headroom is the reason. Each bit adds about 6 dB of theoretical dynamic range, so 16-bit offers roughly 96 dB and 24-bit roughly 144 dB. Real converters fall short of 144 dB because of their own analogue noise, but you still gain enough margin that recording well below full scale costs nothing audible.

### Can I fix distortion that happened in the microphone?

Not really. If the capsule or preamp was overloaded, the waveform was already distorted when the converter measured it, so there is no flattened plateau to reconstruct. You can reduce how unpleasant it is with de-essing, a high shelf or a narrow cut in the upper midrange, and edit around the worst moments. Prevention is the only real fix: move the mic back, engage a pad, or use a microphone rated for higher sound pressure levels.

### Should I declip before or after noise reduction?

Declip first. Noise reduction builds a profile of the unwanted signal and subtracts against it, and clipping distortion is broadband, non-stationary and spread across the spectrum, so it confuses that profile and gets treated as programme material. Fixing peaks first, along with DC offset and rumble, gives every later stage a cleaner signal.
