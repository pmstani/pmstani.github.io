---
layout: post
title: "How to Remove Background Noise From an Audio Recording"
description: "How to remove background noise from a recording: identify what you are hearing, build a real noise profile, apply the right amount, and avoid artefacts."
date: 2026-07-26
categories: [utilities]
tags: [noise-reduction, background-noise, audio-repair, audio-enhancement, hiss-removal, voice-recording, on-device-processing]
silo: audio-enhancement
pillar: audio-enhancement
related_apps: [soundspice, transcribe, cuevoice, tinnitus-ai]
---

You play back the interview and every word is there. So is the fridge. A compressor kicks in ninety seconds in, runs for four minutes, stops, and comes back, all the way through a conversation you cannot repeat. Or it is the air-conditioning above the meeting room, or traffic through a single-glazed window, or the laptop fan eighteen inches from the microphone.

This is less a recording mistake than a listening one. Rooms are noisy, and human hearing is extraordinarily good at ignoring steady sound. Microphones are indifferent, and hand back what was actually in the air.

Much of that noise can be reduced convincingly. But reduction is routinely aimed at problems it cannot solve, which is how recordings end up worse after treatment than before. This guide covers what reduction does to a signal, how much to use, the order to work in, and how to do it automatically or by hand. It is part of our guide to the [best audio enhancer and noise removal apps for iPhone, iPad and Mac](/blog/utilities/best-audio-enhancer-noise-removal-apps-iphone-ipad-mac/).

## Identify the noise before you touch a single control

Almost every bad result starts with the wrong diagnosis. "Background noise" is not one thing, and the five common varieties want five different treatments. Listen to a quiet passage on headphones and name what you hear.

| What you hear | What it usually is | What fixes it |
|---|---|---|
| Steady hiss or grey wash | Fans, air handling, rain, traffic, preamps | Broadband reduction, measured profile |
| A pitched hum that never changes | Mains hum at 50 or 60 Hz, a ground loop | Narrow notch filters |
| A door, cough, creak, notification | One-off events | Editing them out |
| Boominess, echo, a "far away" voice | Room reflections, reverb | Mostly not removable |
| Low rumble, thumps, wind | Handling noise, footfall, air over the capsule | A high-pass filter |

### Steady broadband noise: the tractable case

This is what noise reduction was built for. A fan, an HVAC duct, rain on a roof, or the noise floor of a cheap preamp all produce sound spread continuously across the spectrum that stays statistically similar second to second. Being predictable, it can be characterised and largely removed.

### Tonal noise: a different tool entirely

If the noise has a pitch — a 50 Hz drone in Europe, 60 Hz in North America and Japan, a whine from a drive, a dying smoke alarm — broadband reduction is the wrong instrument. Tonal noise occupies a few very narrow bands, a fundamental plus a stack of harmonics, and the fix is to notch out those exact frequencies. Ask broadband reduction to strip a lot of energy from a tiny slice of spectrum and it either fails or takes the bottom out of the voice with it. Our guide to [removing hum and buzz from a recording](/blog/utilities/how-to-remove-hum-buzz-from-recording-50-60hz/) covers that case.

### Intermittent noise: editing, not reduction

A chair scraping, a dog, a phone buzzing on the table, a cough. These are events, not a noise floor. There is nothing steady to profile, so reduction chews on your voice instead. Cut the offending seconds and cross-fade the join; if the noise lands on top of speech, you are choosing between losing the words and keeping the noise.

### Reverb and room sound: mostly not removable

Here honesty saves hours. If a voice sounds boxy, hollow or like it was recorded in a stairwell, you are hearing reflected copies of the voice itself arriving milliseconds after the direct sound. The measure is **RT60**, the time sound in a room takes to decay by 60 dB: a treated booth might be under 0.3 seconds, a living room with a rug and a sofa 0.4 to 0.6, a tiled bathroom past a second. Above roughly half a second, speech smears into itself. Reverb is the same signal you want to keep, delayed and filtered, so noise reduction cannot separate it and de-reverb tools only manage partial improvements. The lever is physical: direct sound obeys the inverse-square law, dropping about 6 dB every time you double the distance, while the reflected energy filling the room stays roughly constant wherever you stand. Move from two feet to one and the voice gains around 6 dB while the room does not. If the problem is the room, the fix was the microphone position.

### Wind and rumble: high-pass territory

Energy below about 80 Hz almost never carries speech, but it carries handling thumps, footsteps, traffic rumble and wind, and it eats headroom. A high-pass filter removes it at essentially no cost to the voice.

## How noise reduction actually works

The software chops the recording into short overlapping slices, typically tens of milliseconds each, and converts each into a set of frequency **bins** — a snapshot of how much energy sits at each frequency at that instant. Given a stretch of audio containing only noise, it measures the average level in every bin and stores that as a **noise profile**: a frequency-by-frequency description, not a single number. Then it walks the recording bin by bin, leaving alone the bins whose energy sits well above the profile, and attenuating the ones sitting near it. That is **spectral subtraction**, and its virtue is selectivity — it pulls hiss out of the gaps between and inside words while leaving loud speech intact.

The limitation is the same mechanism. Where noise and signal share a bin, nothing can tell you how much of that energy was voice, so the software is guessing. Gently, the guesses do not matter. Pushed hard, the artefacts have recognisable signatures: **musical noise**, where isolated surviving bins turn into faint tinkling or chirping; the **underwater, watery or swirly** quality, which is the reduction amount fluctuating between adjacent slices; and **consonants losing their edge**, the one that ruins speech. Fricatives — s, f, sh, th — are physically broadband noise, nearly indistinguishable from hiss bin by bin, so aggressive reduction removes them along with the room. Hence lisping, gated, robotic voices.

A **measured** profile therefore beats a guessed one, because a generic curve has to assume something while a profile from your room, your microphone and your gain setting describes the enemy exactly. That points at the most useful habit here: **record five to ten seconds of silence** at the top of every recording. Those seconds cost nothing, trim out later, and give any tool a clean sample to learn from. Without them, everything downstream is inference.

## How much reduction is enough? Less than you want

The instinct is to keep pulling the slider until the noise is gone. Resist it. In practice, **6 to 12 dB of broadband reduction is where most recordings sound clean and still sound like recordings** — enough to take an audible hiss to the edge of perception without touching the character of the voice. Past about 15 dB the treatment starts announcing itself; by 20 to 30 dB it declares itself outright, with unnaturally dead gaps between sentences, softened consonants and faint chirping underneath. The standard worth internalising: **noise you stop noticing beats noise that has been replaced by artefacts.** Listeners forgive a low, steady, natural floor almost indefinitely, because their hearing does the rest. They do not forgive a voice that sounds processed.

A noise floor around **−60 dBFS or below** is effectively inaudible under speech in normal listening, but the absolute figure matters less than the gap. A voice peaking at −12 dBFS over a −60 dBFS floor has roughly 48 dB of separation and sounds clean; the same floor under a voice reaching only −40 dBFS is plainly audible, because 20 dB separates them. Ask first whether the real problem is too much noise or too little voice — often levelling and loudness normalisation do most of the work, the subject of our explainer on [LUFS and loudness normalisation](/blog/utilities/lufs-loudness-normalization-podcast-explained/).

## The right order of operations

Order matters more than any individual setting: each stage changes the material the next one sees.

1. **High-pass first**, below roughly 80 Hz for a voice. Rumble and thumps vanish, and the reduction that follows no longer has to account for low-frequency energy nobody wanted.
2. **Notch out tonal hum next**, the 50 or 60 Hz fundamental and its harmonics. Skip this and broadband reduction sees a huge concentration of energy in a few bins, then either ignores it or over-reduces everything nearby to compensate.
3. **Then broadband noise reduction.** Only the steady material it is good at remains, so a shallower setting achieves the same perceived result.
4. **Then tonal EQ.** EQ first means boosting noise along with voice, then asking reduction to remove what you amplified.
5. **Then de-essing**, easier to judge once the top end is not competing with hiss.
6. **Levelling and loudness last.** Compression and normalisation raise quiet passages, and quiet passages are where noise lives.

The commonest mistake is running that list backwards: normalising a noisy file, then cleaning it. Reduction then has to be twice as aggressive for the same result, and aggression is what produces artefacts.

## Doing it automatically: SoundSpice

Every rule above is a decision, and most people with a noisy recording do not want to make six decisions. [SoundSpice](/apps/soundspice/) collapses them into dropping a file.

Hand it a recording — from the share sheet, from Files, or by dragging it onto the window on a Mac — and analysis and repair start immediately, with no setup screen and no faders. It measures the recording, finds the quietest passages, builds a noise profile from them rather than from an assumption, and applies reduction only in the amount the measurement warrants. It runs the rest of the chain in the order above too: rumble out, hum notched, clipped peaks reconstructed, sibilance tamed, tonal balance corrected, loudness normalised with true peaks limited to −1 dBTP.

What makes it useful here is that it shows you the reduction rather than asserting it. You get a **before and after noise floor in dBFS**, so "the hiss is gone" becomes a number you can check, and a **spectrum comparison**, original against processed with the acted-on regions shaded, so you can see whether the reduction landed where the noise was or across the voice. The **Original/Processed A/B is loudness-matched by default**, so a louder result cannot pass for a cleaner one. Alongside sits a plain-language report of what it found and what it applied, so a stage that never fired is never claimed.

The conservatism is deliberate: every stage has guardrails and does less when in doubt, the right bias here. Your original file is never modified, and everything runs on your device with no upload.

{% include blog-cta.html app_slug="soundspice" %}

If the recording came out of Voice Memos, see our walkthrough on [making a voice memo sound professional](/blog/utilities/make-voice-memo-sound-professional-iphone/); for two people on two connections, [cleaning up remote podcast interview audio](/blog/utilities/how-to-clean-up-remote-podcast-interview-audio/) is more targeted.

## Doing it by hand: Audacity

Audacity is free, open source, cross-platform, and its noise reduction is a capable implementation of everything above.

1. Find a region containing **only noise** — ideally the silence you recorded at the top, otherwise a gap between sentences. Half a second works; two is better. Check that no breath, mouth click or distant voice sneaks in.
2. Select it, then **Effect → Noise Removal and Repair → Noise Reduction**, and click **Get Noise Profile**. Nothing audible happens yet.
3. Select the whole track, reopen the same effect, and set your amount. Start at **6 to 12 dB** and leave **Sensitivity** and **Frequency smoothing** near their defaults. Sensitivity governs how readily a bin is judged to be noise; frequency smoothing spreads that decision across neighbouring bins, suppressing musical noise at the cost of a little detail.
4. **Preview** before applying, listening to the esses and to the silence between sentences rather than the loud middle of one. Artefacts show up there first.
5. If it is wrong, **undo and retry** rather than stacking a second pass on the first. Two 10 dB passes sound worse than one 15 dB pass.

Audacity's honest trade-off is labour, not capability: you are the analysis stage, choosing the region and judging the amount for every file. Reasonable for one recording, wearing for thirty. Cloud services such as Adobe Podcast Enhance and Auphonic automate much of it, at the cost of uploading your recording to somebody else's servers; iZotope RX offers finer surgical control at professional prices. Our [on-device versus cloud audio processing](/blog/utilities/on-device-audio-processing-vs-cloud-audio-tools-privacy/) comparison weighs that up, along the same lines as [on-device AI versus cloud AI](/blog/productivity/on-device-ai-vs-cloud-ai-privacy-performance/).

## When reduction is not the answer

Four situations call for something else. **Re-record** if you still can: for a voiceover or narration, a second take in a quieter moment beats any repair. **Cut it** if the noise is an event rather than a floor. **Comp two takes**, which is how most narration gets finished. Or, if the voice is simply too quiet against the room, **accept the noise and raise the voice** — a clean voice over audible room tone reads as a real recording; a processed voice over silence reads as a mistake.

## Preventing it next time

- **Get closer.** Halving the distance from mouth to microphone gains roughly 6 dB of voice against an unchanged room level. Six inches to a foot is a good range, and that one change often removes the need for reduction entirely.
- **Turn things off** — fridge, HVAC, fan, notifications — and close the windows. A fridge compressor cycles, which is worse than constant noise, because a changing profile is harder to subtract cleanly.
- **Record 5 to 10 seconds of silence** before speaking, every single time.
- **Soft beats bare.** A rug, curtains, a bookcase or a duvet on a clothes rail behind you cuts RT60 noticeably; hard bathrooms and kitchens are the worst rooms to work in.
- **Record 24-bit with peaks around −12 dBFS.** Twenty-four bits gives roughly 144 dB of theoretical dynamic range against about 96 dB for 16-bit, so conservative levels cost nothing. If clipping happens anyway, [fixing clipped and distorted audio](/blog/utilities/how-to-fix-clipped-distorted-audio/) is a separate repair.
- **Read from a prompt** when the recording is scripted. A teleprompter such as [CueVoice](/apps/cuevoice/) advances as you speak, keeping your mic distance constant — see our guide to the [best apps for content creators](/blog/productivity/best-apps-content-creators-iphone/).
- **Protect your hearing.** Judging reduction means long, close listening, and the temptation is to crank it. If you live with ringing, [Tinnitus AI](/apps/tinnitus-ai/) offers personalised sound therapy, but the cheaper intervention is turning it down.

## Clean audio transcribes better

Speech recognition is sensitive to signal-to-noise ratio in a way human listeners are not. Accuracy degrades as the noise floor rises, because the acoustic model is trying to distinguish the same fricatives and plosives that noise most resembles. Cleaning a recording first therefore returns fewer garbled words, particularly on names and numbers, which makes "clean, then transcribe" a sensible default for lectures, interviews and meetings. Run the file through [SoundSpice](/apps/soundspice/), export it, then hand the result to [Transcribe](/apps/transcribe/); our guide to [using AI to transcribe audio and voice notes on iPhone](/blog/productivity/how-to-use-ai-to-transcribe-audio-and-voice-notes-on-iphone/) covers the second half. The same habit helps with recordings of medical consultations, where our notes on [preparing for doctor appointments](/blog/health-wellness/how-to-prepare-doctor-appointments-chronic-condition/) explain why an accurate record matters.

## Frequently asked questions

### Can background noise be removed completely?
Rarely, and not without cost. Steady broadband noise can usually be reduced until you stop noticing it, which is the goal that matters. Removing every last trace takes reduction so deep the voice suffers, and listeners notice a processed voice long before a low, natural noise floor.

### Why does noise reduction make voices sound robotic or underwater?
Because it works bin by bin across the spectrum, and fricatives such as s, f, sh and th are physically broadband noise, nearly indistinguishable from hiss. Push the reduction hard and those consonants are attenuated along with the room, while fluctuation between analysis frames adds the watery quality. Backing off to 6 to 12 dB almost always fixes it.

### Can I remove background music from speech?
Not cleanly. Music is broadband, constantly changing, and overlaps the voice in frequency and time, so there is no steady profile to subtract. Source-separation tools can sometimes pull the two apart usefully for reference or transcription, but the result carries audible artefacts. If the music is quiet, gentle reduction plus raising the voice is more realistic.

### Does noise reduction reduce audio quality?
It changes the signal, so strictly yes; the question is whether the change is an improvement. A conservative reduction that removes an audible hiss and leaves the voice intact is a clear gain. An aggressive one that trades hiss for musical noise and softened consonants is a loss even though the meter shows less noise — which is why a loudness-matched comparison and a noise-floor figure beat a slider position.

### Does the Voice Isolation setting on iPhone remove background noise?
Voice Isolation is a microphone mode applied live during calls and in apps that support mic modes, so it shapes what the other person hears in real time rather than cleaning a file you already have. Voice Memos separately offers an Enhance Recording option for a saved recording, which helps with mild room noise but gives you no measurements and no control over how much it applies.
