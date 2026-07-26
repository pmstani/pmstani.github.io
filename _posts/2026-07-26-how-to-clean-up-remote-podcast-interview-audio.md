---
layout: post
title: "How to Clean Up Remote Podcast Interview Audio"
description: "Clean up remote podcast interview audio: repair each guest's track on its own, match tone and level between speakers, then normalise the episode to −16 LUFS."
date: 2026-07-26
categories: [utilities]
tags: [podcast-audio, remote-interview, audio-enhancement, loudness-normalization, noise-reduction, double-ender, audio-repair]
silo: audio-enhancement
pillar: audio-enhancement
related_apps: [soundspice, transcribe, cuevoice, the-done-list, my-agenda-planning]
---

The conversation went well. The guest gave you the story you wanted and nothing sounded wrong while it was happening. Then you open the file the next morning and it is a different recording. Your voice is close and solid. Theirs is thinner and hollower than the person you spoke to, a foot further away, with a faint hiss and a hum that fades in and out. Worse than either fault alone is the pair together: cutting from your line to theirs is like cutting between two programmes.

Remote interviews are how most podcasts get made now, and they also produce the most audio you cannot fully repair. That is a consequence of how calls work rather than a reflection on your skill, and the useful response is to know which faults are fixable, which are partly fixable, and which were settled before you pressed record. This guide covers the triage, the per-track workflow, the loudness numbers, and a checklist for your guests. It is part of our wider guide to the [best audio enhancer and noise removal apps for iPhone, iPad and Mac](/blog/utilities/best-audio-enhancer-noise-removal-apps-iphone-ipad-mac/).

## Why remote audio is uniquely difficult

A remote interview stacks four problems, and only one is about the room.

**The call platform already changed your audio.** Codecs such as Opus, which underpins WebRTC and so most browser-based calling, keep speech intelligible at a few tens of kilobits per second by discarding what is least necessary for comprehension: the top of the spectrum, fine detail in quiet passages, the information that makes a voice sound present rather than merely legible. Right trade for a conversation, wrong one for something you publish.

Three real-time processes then run before the audio reaches disk. **Automatic gain control** rides the level continuously, pushing quiet speech up and loud speech down, which is why remote tracks breathe and pump. **Noise suppression** attenuates whatever it classifies as background, which on a good day removes a fan and on a bad day removes the tail of every word. **Echo cancellation** subtracts an estimate of what the far end is playing through its speakers, and an imperfect estimate takes pieces of the voice with it. All three are one-way: decisions already applied to the waveform, not settings a later tool can reverse.

**Packet loss leaves holes.** When a packet arrives too late the decoder guesses — repeats a fragment, fades, or synthesises something plausible. Mild cases warble; worse ones produce the robotic stutter, or a word that is simply not there. Those are gaps where audio never existed, which is why nothing repairs them.

**Two rooms, two microphones, two distances.** Direct sound from the mouth obeys the inverse-square law and drops roughly 6 dB each time the distance doubles, while the reflected energy filling the room stays about the same wherever you sit. So a guest at arm's length from a laptop lid captures far more room and far less voice than you do at six inches from a real microphone.

### Recording the call is not the same as double-ending

This distinction matters more than any technique in this article.

**Recording the call** means capturing what came down the wire — one mixed file, or separate per-participant files, but either way each remote voice has already been through the codec, the gain control and the suppression. You have a copy of the compromised version.

**Double-ending** means each participant records themselves locally at full quality, and the files are exchanged afterwards. The call is still the conversation, but it is only the intercom; nobody's published audio crosses the network, so every problem above except room acoustics disappears at a stroke.

Double-ending is worth more than every repair tool in existence combined. If you change one thing about how you make remote episodes, change this.

## Triage before you process

Put headphones on, play each track through on its own, and write down what is wrong with it: noise type and level and whether it is steady or cycling, any pitched hum, flat-topped peaks or crunch on loud words, whether the esses hurt, how much room sound there is, where the peaks sit, and whether the tone reads muddy, boomy, thin or dull.

The two tracks almost never want the same treatment. Yours might need only a little de-essing; the guest's might need a hum notch, noise reduction and a tonal correction that would ruin your voice if applied there. One chain across both makes every setting a compromise, so a mixed file gets both ends slightly wrong.

## Fix each track on its own, then match them

Four stages, in this order.

**1. Repair each track separately.** Per file: high-pass out rumble below roughly 80 Hz, notch mains hum and its harmonics, reduce broadband noise against a profile measured from *that* track's own quiet passages, reconstruct clipped peaks, tame sibilance, then correct tonal balance with wide, gentle EQ. Order matters, because each stage changes what the next one works on. Our guide to [removing background noise from an audio recording](/blog/utilities/how-to-remove-background-noise-from-audio-recording/) explains why a measured profile beats a guessed one — and why a profile from the guest's room is useless on your track.

**2. Match tonal balance between speakers.** The goal is not identical voices but a handover the listener stops noticing. That means small moves towards the middle: boxiness out of the more distant voice around 300 to 500 Hz, presence around 3 kHz where a voice is dull, a top end markedly brighter than the other eased off. Judge every move by switching between the two.

**3. Match levels.** Get each voice to a similar loudness *before* you normalise the programme. This is the step listeners notice most, because a quiet guest against a loud host means reaching for the volume every time the conversation turns. Level within each track: if the guest drifted quieter for the last twenty minutes, that is a levelling job.

**4. Assemble, then normalise once.** Edit the episode together, then normalise the finished timeline to the podcast target with a true-peak ceiling.

Per-track repair beats one pass over the mix because a noise profile only describes the track it was measured from, and because once the voices are combined every correction to one is applied to the other, with no path back to the parts. Normalisation goes last because levelling raises quiet passages, which is where noise lives, so normalising first amplifies the floor and then demands a more aggressive reduction.

## The specific remote problems, with honest verdicts

| Problem | Verdict | What to do |
|---|---|---|
| Guest room reverb, hollow voice | Mostly unfixable | Close mic and soft furnishings next time |
| Guest hum from a laptop charger | Very fixable | Notch the fundamental and its harmonics |
| Guest clipping from AGC or hot input | Partly fixable | Reconstruct mild clipping, accept the rest |
| One channel much quieter | Fixable | Level per voice before normalising |
| Dropouts and robotic artefacts | Not fixable | Edit around them, or re-ask the question |
| Suppression pumping between words | Not fixable | Turn it off next time, at both ends |

**Reverb** is where people spend the most effort for the least return. You are hearing copies of the guest's own voice arriving milliseconds late off walls and ceiling — the same signal you want to keep, which is why no tool separates it cleanly and why de-reverb only manages a partial improvement. Do not EQ your way out of it: cutting low mids thins the voice without removing the reflections.

**Hum** is the happy case. It sits at a known fundamental — 50 Hz in Europe, 60 Hz in North America and Japan — plus a stack of harmonics in very narrow slices of spectrum, and notch filters take it out at almost no cost to the voice. A laptop on a charger is the classic source, dimmers close behind. Our guide to [removing hum and buzz at 50 or 60 Hz](/blog/utilities/how-to-remove-hum-buzz-from-recording-50-60hz/) covers why the harmonics matter as much as the fundamental.

**Clipping** from a hot input or an over-enthusiastic gain control is partly recoverable: where only the tops of a few peaks are flattened the missing curve can be plausibly reconstructed, but where clipping runs across whole words the information is gone. [Fixing clipped and distorted audio](/blog/utilities/how-to-fix-clipped-distorted-audio/) sets out where that line falls.

**Dropouts** are gaps, not damage, so treat them editorially: cut them if they land in a pause, cut around them mid-sentence, or ask the question again and use the second answer. **Suppression pumping** — the guest's room noise swelling in and out between words — cannot be unpicked, because the gating already happened. Prevention is the only fix, at both ends, since your platform's processing shapes what it sends as well as what it plays.

## Loudness for the finished episode

Normalise the assembled programme once. Apple Podcasts' guidance for delivered audio is **−16 LUFS integrated for stereo and −19 LUFS integrated for mono**, with true peaks limited to **−1 dBTP**. Both use the loudness measurement defined in ITU-R BS.1770 and adopted by EBU R128, which is why the same units appear across broadcast and streaming. If the audio also goes out through music streaming platforms, **−14 LUFS** is the usual target there.

Hit the target rather than exceed it, because platforms normalise on playback: master hotter and the platform simply turns the episode down, so the extra limiting buys nothing and costs dynamics. The true-peak ceiling is there because lossy encoders can push reconstructed peaks above the level you measured, and headroom keeps that from becoming distortion on someone's phone. Our explainer on [LUFS and loudness normalisation for podcasts](/blog/utilities/lufs-loudness-normalization-podcast-explained/) works through the measurement properly.

## Doing it per track in SoundSpice

That is a lot of decisions, repeated for every participant, every episode. [SoundSpice](/apps/soundspice/) suits the job because it takes one file at a time and treats it on its own terms.

Drop in the host track and analysis and repair start immediately — no setup screen, no faders. It measures that file, builds a noise profile from its own quietest passages rather than from an assumption, and applies only what the measurement warrants: rumble and DC offset out, mains hum and harmonics notched, broadband noise reduced, clipped peaks reconstructed if present, sibilance tamed, tonal balance corrected by wide gentle EQ, levels steadied. Then drop in the guest track and it does the same again from scratch, against *that* room and *that* microphone — two measurements, two different sets of corrections, which a single pass over a mix cannot do.

It returns numbers rather than impressions, which is what matching two speakers needs. Each track gets a plain-language report of what was **found** and then what was **applied**, taken from the actual run, so a stage that never fired is never claimed; that alone tells you the guest had hum and you did not. Each also gets before and after figures for **integrated loudness (LUFS), true peak (dBTP), loudness range (LU) and noise floor (dBFS)**, so levelling the two tracks against each other becomes arithmetic rather than guesswork. The **spectrum comparison** shades the regions the chain acted on, original against processed on a log frequency axis, which is how you tell a tonal correction from a rescue. And the **A/B is loudness-matched by default**, so louder cannot pass for better.

After the repair pass come eight finishing Blends: None, Natural, Voice, Warmth, Brightness, Punch, Depth and Vintage, each at Light, Medium or Strong. **Voice** is the natural choice for speech, lifting presence around 3 kHz and steadying the level, and the same Blend at the same intensity on both tracks nudges them together. None is a perfectly good answer too.

It runs many times faster than real time and long files finish in the background, which matters at ninety minutes a track. It exports M4A, ALAC, WAV, AIFF or FLAC with source metadata intact, at −14, −16 or −23 LUFS or as-is — and as-is is what you want for individual tracks, saving the single loudness pass for the finished episode. Original files are never modified, and nothing is uploaded: no server, no cloud, no account, no analytics, because the app has no networking code at all. For an interview under embargo, or an off-the-record aside not yet cut, that is a substantive point rather than a slogan; our comparison of [on-device audio processing versus cloud audio tools](/blog/utilities/on-device-audio-processing-vs-cloud-audio-tools-privacy/) weighs it against uploading to Adobe Podcast Enhance or Auphonic, or doing the work by hand in Audacity. The honest limit is that it processes existing files, so editing and assembly still happen in your editor.

{% include blog-cta.html app_slug="soundspice" %}

## A pre-interview checklist to send your guests

Long technical instructions get skimmed. This list is short enough that guests follow it, and it removes more problems than any processing chain.

- **Wear wired earbuds or headphones, not speakers.** The most valuable item here. Speakers feed your voice back into your microphone, which forces echo cancellation to work hard and take pieces of you with it.
- **Sit close to the microphone.** A hand's span, not an arm's length. Halving the distance gains roughly 6 dB of voice against a room that has not got any quieter.
- **Record yourself locally if you can.** Any recorder counts, including Voice Memos on a phone propped nearby. A phone backup has saved many episodes.
- **Quiet the room.** Fridge and fan off, window shut, notifications silenced, door closed. Something soft nearby — curtains, a rug, a coat over the chair — helps more than it sounds like it should.
- **Unplug the laptop and run on battery.** Chargers are the commonest source of hum on a remote track and dimmer switches the second.
- **Turn off the platform's noise suppression and gain control** if you can find them, usually under audio settings and sometimes labelled "original sound". Their work cannot be undone afterwards.
- **Do a ten-second test recording and listen back before you start.** Say a sentence, play it to yourself on the headphones, fix what you hear.

If your own side is scripted, a teleprompter such as [CueVoice](/apps/cuevoice/) advances as you speak, keeping your head still and your distance to the microphone constant. Our roundup of the [best teleprompter apps](/blog/productivity/best-teleprompter-apps-for-content-creators-and-public-speakers/) covers that end of the kit, and the [best apps for content creators](/blog/productivity/best-apps-content-creators-iphone/) fills in the rest.

## A cleaner track transcribes better

Speech recognition is more sensitive to signal-to-noise ratio than human listeners are, because the acoustic model is trying to distinguish exactly the fricatives and plosives that broadband noise most resembles. A hissy, distant, gain-pumped guest track produces noticeably more garbled words, and the errors cluster where they hurt most: names, numbers, sentence endings. So "clean, then transcribe" is a sensible default. Run each track through [SoundSpice](/apps/soundspice/), export it, then hand the result to [Transcribe](/apps/transcribe/); our guide to [using AI to transcribe audio and voice notes on iPhone](/blog/productivity/how-to-use-ai-to-transcribe-audio-and-voice-notes-on-iphone/) covers the second half.

All of this gets easier as a routine: brief, checklist sent, record, per-track repair, assemble, normalise, transcribe, publish. Keeping that list in [The Done List](/apps/the-done-list/), with recording dates in [My Agenda](/apps/my-agenda-planning/), is the unglamorous half of sounding consistent — as is the wider setup in our guides for [working from home](/blog/productivity/best-apps-working-from-home-iphone-mac/) and for [freelancers](/blog/productivity/best-apps-freelancers-iphone-mac/).

## Frequently asked questions

### How do I make two mismatched voices match?
Repair each track separately, then bring them towards each other in two passes: tonal balance, then level. Ease boxiness out of the more distant voice around 300 to 500 Hz, add presence around 3 kHz where a voice is dull, and judge every move by switching between the two. The goal is a handover the listener stops noticing.

### Can I remove echo or reverb from a guest's track?
Only partially. Reverb is the guest's own voice arriving late off the walls, so it cannot be separated out the way steady noise can, and de-reverb tools manage an improvement rather than a removal. Avoid EQing your way out of it, since cutting low mids thins the voice without reducing the reflections. The real fix is a closer microphone next time.

### Should I normalise before or after editing?
After. Integrated loudness measures the whole programme, so normalising before the edit is finished describes something you are about to change. It also raises the noise floor before you have removed it, forcing a more aggressive reduction. Level each voice per track, then normalise the assembled episode once.

### What LUFS should a podcast be?
Apple Podcasts' guidance is −16 LUFS integrated for stereo and −19 LUFS integrated for mono, with true peaks limited to −1 dBTP. If the same audio also goes to music streaming platforms, −14 LUFS is the usual target. Mastering hotter gains nothing: platforms normalise on playback and simply turn the episode down, and you keep the lost dynamics.

### Can I fix a Zoom recording?
You can improve one, but there is a ceiling. Whatever came down the wire has already been through a low-bitrate codec, gain control, noise suppression and echo cancellation, none of it reversible. Use per-participant files rather than the mixed one if the platform offers them, and expect a decent result rather than a studio one.

### Is it worth asking guests to record locally?
Yes — it is the highest-value request in remote podcasting. A locally recorded file has no codec compression, no gain riding, no suppression gating and no dropouts, which removes every remote fault except the guest's room. It costs one line in your booking email.
