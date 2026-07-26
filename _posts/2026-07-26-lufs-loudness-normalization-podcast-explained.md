---
layout: post
title: "LUFS and Loudness Normalization Explained for Podcasts"
description: "LUFS and loudness normalization explained for podcasts: what integrated loudness measures, why −16 LUFS, true peak headroom, and how to hit your target."
date: 2026-07-26
categories: [utilities]
tags: [lufs, loudness-normalization, podcast-audio, true-peak, ebu-r128, audio-mastering, audio-enhancement]
silo: audio-enhancement
pillar: audio-enhancement
related_apps: [soundspice, transcribe, cuevoice, the-done-list]
---

You queue your new episode right after one from a show you admire, and yours sounds small. Not worse, exactly — just further away, as if recorded down a corridor. Or a listener writes to say the intro music is fine, but your voice makes them reach for the volume and the ad read startles them back. Both symptoms come from the same place, and it is almost never the microphone. This is the reference article for the rest of our audio series, so it names its sources; for the wider job of cleaning up a recording first, see our guide to the [best audio enhancer and noise removal apps for iPhone, iPad and Mac](/blog/utilities/best-audio-enhancer-noise-removal-apps-iphone-ipad-mac/).

## Why peak normalization does not make anything louder

Four measurements get casually called "level", and confusing them causes most loudness trouble.

**Sample peak** is the largest absolute sample value in the file, in dBFS, where 0 dBFS is the biggest number the format can hold. **True peak** is the highest value of the continuous waveform a converter reconstructs through those samples, in dBTP, and it can exceed any actual sample. **RMS** is average energy over a window, which reflects sustained level but treats a 40 Hz rumble and a 3 kHz sibilant alike. **Loudness** is RMS-like, but frequency-weighted and gated so it tracks what people report hearing. That last one is what LUFS gives you.

The Normalize command in most editors is peak normalization: find the loudest sample, work out how much gain brings it to your ceiling, apply that gain to the whole file. The logic is sound; the outcome is often useless, because one transient decides the answer for everything else. A desk knock, a plosive, a chair creak — any of these can already sit near full scale in an otherwise quiet recording, and peak normalizing then hands you 0.4 dB and calls it done.

The arithmetic is the whole argument. Two files both peak at −0.1 dBFS: an interview with one loud table knock, measuring −29 LUFS integrated, and a heavily limited music master at −10 LUFS. Identical peaks, 19 LU apart in perceived loudness. Peak level told you nothing.

## What LUFS actually measures

LUFS stands for Loudness Units relative to Full Scale. Because the reference is a full-scale signal, real programme material always reads negative, and −16 LUFS is louder than −23 LUFS.

Two documents matter. **ITU-R BS.1770**, from the International Telecommunication Union, defines the algorithm: the filtering, the channel summing, the gating, the true-peak meter. **EBU R128**, from the European Broadcasting Union, is the practice built on it — which target to hit, what tolerance is acceptable, what a compliant meter should display.

### K-weighting

Ears are not equally sensitive across the spectrum. BS.1770 therefore applies a two-stage filter, universally called K-weighting, before measuring anything: a high shelf approximating the acoustic effect of a head in a sound field, then a high-pass that reduces the weight of the very low end. A deep rumble contributes far less than midrange speech energy of the same amplitude. Channels are measured individually and summed, which is why a stereo file and its mono equivalent do not read the same number.

### Gating

An unweighted average would be dragged down by every pause, so a show with generous editing silence would measure quieter than the same show with the gaps trimmed. BS.1770 therefore gates: an absolute gate discards anything below −70 LUFS, removing silence and room tone, and a relative gate discards blocks more than 10 LU below the ungated result, so quiet passages do not pull the number down.

### Three time scales

The algorithm is read over three windows. **Momentary** uses 400 ms, useful for spotting a shout or a plosive. **Short-term** uses 3 seconds, roughly a phrase, and it is the meter to watch while listening, because it tracks the level a listener perceives moment to moment. **Integrated** is the gated measurement over the entire programme, and it is the number a delivery target refers to: if a specification says −16 LUFS, it means integrated. The two shorter windows are set out in the EBU's meter specification, EBU Tech 3341.

### LU and LUFS are the same size of unit

LUFS is absolute: referenced to full scale, it names a level. LU is relative: it names a difference. Against a −16 LUFS target, "−18 LUFS" and "2 LU under" describe the same thing. Crucially, **1 LU is 1 dB**, so a meter reading 3 LU below target means you need 3 dB of gain.

## Loudness range, and what a suspicious number tells you

A compliant meter also reports **loudness range**, abbreviated LRA and expressed in LU — how much the perceived level moves about over an episode. Defined in EBU Tech 3342, it is computed from the distribution of short-term loudness values across the programme, discarding the extreme tails so one bang cannot define it.

Values sort by genre: a single well-levelled voice reading a script sits low, often a few LU; a two-host conversation with laughter sits higher; drama and dynamic acoustic music run into the teens and beyond, because the contrast is the point. Read LRA as a sanity check rather than a target. About 1 LU on a spoken-word episode is a warning — everything is the same size, which is what heavy compression produces, and it is tiring over an hour. An LRA in the high teens on a two-person interview means the opposite: nobody levelled the recording, and the listener is doing that work by hand.

## True peak, and why the ceiling is −1 dBTP

Samples are points, not a waveform. A converter draws a smooth continuous curve through those points, and that curve can rise above the highest sample it passes through. The overshoot is an inter-sample peak, invisible to any meter that only inspects sample values. BS.1770 specifies a true-peak meter that oversamples the signal to estimate the reconstructed curve and reports the result in dBTP.

Lossy encoding makes it worse: AAC, MP3 and Opus do not reproduce your samples but something that sounds like them, and the decoded waveform can be slightly taller in places. A file sitting at −0.1 dBFS can decode above full scale in a listener's app and clip there, in a way you never heard on yours. One decibel of headroom is the standard defence: EBU R128 sets a maximum true peak of −1 dBTP, a ceiling adopted well beyond broadcast because the reasoning applies to anything encoded and decoded elsewhere.

This is where finished files most often get damaged. Suppose your episode measures −24 LUFS and you want −16: that is 8 dB of gain, and gain is indifferent to what it lifts, so every peak rises 8 dB too. Peaks that sat near −1 dBTP are now above full scale, and unless something catches them you have clipped a file you considered finished. Upward normalization needs a true-peak limiter after the gain stage, every time — our guide to [fixing clipped and distorted audio](/blog/utilities/how-to-fix-clipped-distorted-audio/) covers what to do when the damage is already baked in. And if the target takes many decibels of limiting, your dynamics are too wide for the level you asked for.

## The targets, and who publishes them

| Destination | Integrated target | True peak ceiling | Notes |
|---|---|---|---|
| Streaming music | −14 LUFS | −1 dBTP | De facto level: Spotify publishes it; YouTube, Amazon Music and Tidal sit at or near it. Apple Music's Sound Check normalizes at a level reported slightly lower. |
| Podcast, stereo | −16 LUFS | −1 dBTP | Apple Podcasts' published guidance, and the podcast convention. |
| Podcast, mono | −19 LUFS | −1 dBTP | Also Apple's guidance, 3 LU lower because a mono file played as dual mono measures about 3 LU higher. |
| European broadcast | −23 LUFS ±0.5 LU | −1 dBTP | EBU R128. The tolerance is part of the specification, not slack. |
| US broadcast | −24 LKFS | −2 dBTP | ATSC A/85. LKFS is ATSC's name for the same unit. |

These numbers are worth hitting rather than beating, because the loud destinations normalize on playback: a service measures your integrated loudness and applies a gain offset so you sit alongside everything else. Master to −9 LUFS to be competitive and the platform turns you down by roughly 5 dB — the same loudness as everyone else, with your dynamic range spent to get there. Nothing to win.

Undershooting is the more interesting risk, because behaviour is inconsistent. Some platforms turn a quiet file up, some only turn files down, and podcast clients vary in whether they normalize at all — several do nothing, so the level you deliver is what your listener hears. That asymmetry is why hitting the target yourself is the safe move.

## What "normalize to a target" actually does

Three steps, much less dramatic than the word suggests.

1. Measure the integrated loudness of the whole programme.
2. Subtract it from the target and apply that constant gain to the entire file.
3. Catch any true peaks that now exceed the ceiling with a limiter.

That is all. A gain offset moves everything together; it does not alter the relationship between loud parts and quiet parts. Loudness normalization is **not compression**. Compression and levelling change the shape of the programme rather than its position: deciding a guest's whispered aside needs to come up 6 dB is editorial work about dynamics, while deciding the finished programme sits at −16 LUFS is arithmetic. When people say normalizing squashed their audio, they asked for a target their dynamics could not support and a limiter did several decibels of work to deliver it.

Order matters: **loudness must be the last step in the chain.** Every process before it changes the measurement. Removing 8 dB of hiss lowers the integrated reading, a high-pass that clears rumble changes it again, and a tonal EQ lifting presence around 3 kHz changes it more than you would expect, because K-weighting cares about that region. Normalize and then EQ, and you no longer hit the target you measured.

## Practice that is specific to speech

**Level the speakers before you level the programme.** Integrated loudness is one number for the whole episode and says nothing about whether your guest sits 5 LU under you throughout. Normalizing an unbalanced conversation produces a correctly-loud recording in which one person is still too quiet. Fix that relationship first; our walkthrough on [cleaning up remote podcast interview audio](/blog/utilities/how-to-clean-up-remote-podcast-interview-audio/) deals with the two-ended case, where each file arrives with its own level, noise floor and room.

**Mind the gap between music and voice.** Commercial intro music is often mastered near −9 LUFS; drop it in front of speech normalized to −16 and the transition is a jolt. Match the bed's short-term loudness to the speech rather than setting the fader by eye, then watch the short-term meter through the first thirty seconds — where listeners decide whether to keep going.

**Think about where the episode will be heard.** A car at speed, a train carriage, a gym: all have substantial background noise, and quiet passages in a wide-range mix do not survive them. The listener hears silence, turns the volume up, and the next loud moment punishes them. Headphones tolerate far more contrast, but podcasts are heard mostly in the noisy case — the real argument for a tighter loudness range than you would choose for music.

**Get a clean take in the first place.** Recording close to the microphone at a sensible input level, from a script you are not fighting, makes levelling almost trivial — a teleprompter like [CueVoice](/apps/cuevoice/) does more for a narrow loudness range than any plugin.

## Doing it in SoundSpice

Most of the work above is measurement, which is the part software should do for you. [SoundSpice](/apps/soundspice/) is built around that: drop a file in and analysis and repair start at once. For loudness the only decision it asks for is where the file is going. Pick −14 LUFS Streaming, −16 LUFS Podcast, −23 LUFS Broadcast (EBU R128), or As-is, and it measures the integrated loudness, applies the offset, and limits true peaks to −1 dBTP.

More important than the target list is that it shows you the numbers instead of asserting an improvement. Before and after integrated loudness in LUFS, true peak in dBTP, loudness range in LU and noise floor in dBFS sit side by side, so the result is readings you can check against the table above rather than an adjective. Beside them sits a plain-language report of what was found and what was applied, taken from the run itself, so a stage that never fired is never claimed.

The A/B comparison is loudness-matched by default, which matters: louder reliably sounds better in a blind comparison, so an unmatched before-and-after only demonstrates gain. The ordering is handled too — hum notching, noise reduction against a measured profile, clip repair, de-essing, tonal EQ, levelling and transient restoration all run before normalization, so the target is hit on audio that is already steady. Every stage has guardrails and never touches your original: the result is a new file. It runs on your iPhone, iPad or Mac with no upload and no account, unlike the cloud services compared in [on-device audio processing versus cloud audio tools](/blog/utilities/on-device-audio-processing-vs-cloud-audio-tools-privacy/).

{% include blog-cta.html app_slug="soundspice" %}

Export is where loudness meets the format question. SoundSpice writes M4A (AAC 256 kbps), ALAC, WAV, AIFF or FLAC with source metadata intact, and the lossy option is where the true-peak headroom earns its keep; which container to ship is the subject of our guide to [WAV, AIFF, FLAC, ALAC and M4A](/blog/utilities/audio-file-formats-wav-aiff-flac-alac-m4a-explained/). If audible noise sits underneath the level problem, deal with it first using the approach in [how to remove background noise from a recording](/blog/utilities/how-to-remove-background-noise-from-audio-recording/), because noise reduction changes the measurement.

## How to check your work

**Measure the file you are shipping, not the project.** Encode to AAC for delivery and the decoded result can differ slightly in both loudness and true peak, so measure the actual export — and check the published episode too, since hosting platforms sometimes re-encode.

**Fix your monitoring level and leave it.** Judgements made at a volume you adjusted halfway through are worthless. Set playback once and let the meter decide.

**Compare against a reference, loudness-matched.** Pick an episode from a show in your genre whose sound you admire, measure its integrated loudness, and match yours to it before listening. Any difference you then hear is real; without matching you hear whichever is louder.

Make it a checklist, not a memory exercise: measure, normalize last, verify the export, upload, spot-check the published episode. Five items easy to skip at eleven at night, which is what [The Done List](/apps/the-done-list/) exists for — while [SoundSpice](/apps/soundspice/) reduces most of the rest to choosing a destination. Do any transcription after the clean-up pass, since speech recognition is sensitive to noise and uneven level: [Transcribe](/apps/transcribe/) works from the processed file, as our guide to [transcribing audio and voice notes on iPhone](/blog/productivity/how-to-use-ai-to-transcribe-audio-and-voice-notes-on-iphone/) describes, and our roundup of the [best apps for content creators](/blog/productivity/best-apps-content-creators-iphone/) covers the wider toolkit.

## Frequently asked questions

### What LUFS should a podcast be?
−16 LUFS integrated for stereo and −19 LUFS for mono, with true peaks no higher than −1 dBTP. Those are the figures Apple Podcasts publishes, and the convention across podcast hosting. If your show is also distributed as music-style content on streaming services, aim at −14 LUFS there.

### Is −14 LUFS too quiet?
It only sounds quiet next to a heavily limited master, and any platform that normalizes playback turns that master down to the same place anyway. For spoken word, −14 LUFS is louder than the −16 LUFS podcast convention, not quieter.

### What is the difference between LUFS and dB?
dB on its own is a ratio and needs a reference before it names a level. LUFS is a specific measurement: loudness computed per ITU-R BS.1770, with K-weighting and gating, referenced to full scale. The units are the same size, so 1 LU equals 1 dB.

### Do I need a limiter if I normalize?
Yes, if the normalization raises the level. Gain lifts your peaks by as much as everything else, so a file gaining 8 dB will push peaks past full scale unless a true-peak limiter catches them. Normalizing downward is safe alone; upward without limiting is the commonest way a finished file ends up distorted.

### Will Spotify turn my quiet episode up?
Possibly, but do not build on it. Platforms are consistent about turning loud material down and much less consistent about turning quiet material up, and podcast apps vary in whether they normalize at all. Delivering at the target behaves the same everywhere.

### Does normalizing hurt audio quality?
Normalization itself is a single gain offset, about as benign an operation as exists in digital audio. What can hurt is limiting applied to force a target the dynamics cannot support, and clipping from raising the level with no true-peak limiter. Choose a realistic target and keep the limiter's work to a decibel or two.

### Should I use the mono or the stereo target?
Use the one matching the file you are delivering. BS.1770 sums the channels it is given, so a genuinely mono file measures about 3 LU lower than the same audio as dual mono — hence −19 LUFS for mono against −16 for stereo. Interview and single-voice shows are often better off as true mono files.
