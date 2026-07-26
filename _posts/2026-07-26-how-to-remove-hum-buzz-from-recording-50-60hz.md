---
layout: post
title: "How to Remove Hum and Buzz From a Recording (50 Hz & 60 Hz)"
description: "How to remove hum and buzz from a recording: identify 50 Hz or 60 Hz mains hum, notch the harmonics properly, diagnose ground loops, and keep the audio full."
date: 2026-07-26
categories: [utilities]
tags: [hum-removal, ground-loop, mains-hum, audio-repair, audio-enhancement, notch-filter, noise-reduction]
silo: audio-enhancement
pillar: audio-enhancement
related_apps: [soundspice, transcribe, cuevoice, equipt]
---

You notice it on the second listen. The interview went well, the answers were good, and then you put on headphones and there it is under everything: a low, steady drone that was not in the room, or not as far as your ears were concerned. Or a harsh buzz arrives when you plug the guitar in and leaves the instant you unplug. Or the whine came back the moment somebody dimmed the lights.

All three are the electrical supply leaking into your audio, and among the most fixable faults in recorded sound. Hum has a very specific mathematical shape, and that shape is why the obvious fix, a high-pass filter, makes things worse. Here is where it comes from, how to remove it without hollowing out the voice, and when a re-record beats any filter — a companion to our guide to the [best audio enhancer and noise removal apps for iPhone, iPad and Mac](/blog/utilities/best-audio-enhancer-noise-removal-apps-iphone-ipad-mac/).

## Where hum comes from, and what frequency yours is

Every wall socket carries alternating current at a fixed frequency, and the wiring in the walls radiates a small electromagnetic field at it. Microphones, guitar pickups and unbalanced cables are all, in a small way, antennas: put one near a power cable, a transformer, a dimmer or a charger and some of that field arrives at your recorder as signal.

Usefully, it arrives at a known frequency, which you can work out from where you were standing. **50 Hz** is the mains frequency across Europe and the UK, most of Africa, most of Asia including China and India, Australia and New Zealand, and Argentina and Chile. **60 Hz** covers North America, Brazil and much of the rest of the Americas, and Japan.

Japan catches people out, because it is genuinely split: the east, including Tokyo, runs at 50 Hz; the west, including Osaka and Nagoya, runs at 60 Hz — a legacy of nineteenth-century equipment bought from Germany in the east and the United States in the west. Record in both cities on one trip and the two files need different treatment.

### Confirming it in the spectrum

Confirm anyway: a file can pick up hum from a generator, an inverter, or a colleague on another continent. Look at a spectrum of a quiet passage. Mains hum appears as sharp, narrow spikes at exact, evenly spaced frequencies, standing clear of the smooth carpet of broadband room noise. Read off the lowest one. That even spacing is the giveaway, because nothing natural is that regular. If you would rather not read a spectrum, [SoundSpice](/apps/soundspice/) detects the mains frequency from the file and tells you which it found.

## The harmonics are the real problem

Here is the reason a simple filter fails. Mains hum is almost never a pure tone at the fundamental: a real, loaded circuit produces a series of harmonics, integer multiples of the fundamental, and they land squarely where your voice lives.

| Fundamental | Harmonic series |
|---|---|
| 50 Hz | 100, 150, 200, 250, 300, 350, 400 Hz … |
| 60 Hz | 120, 180, 240, 300, 360, 420, 480 Hz … |

**The audible annoyance often lives in the harmonics, not the fundamental.** Phone and laptop speakers reproduce very little at 50 or 60 Hz, so what listeners hear as "that horrible hum" is frequently the 150, 200 and 300 Hz content, which every playback system handles. A 50 Hz fundamental also sits a whisker above G1 (49.0 Hz) and its second harmonic on G2 (98.0 Hz): hum is a chord, in the register of a male voice's bottom end and an electric bass.

**A high-pass filter therefore cannot fix hum.** One set at 80 Hz takes out the fundamental and does nothing whatever to the harmonics above it, and to catch those with a slope you would set the corner several hundred hertz up, removing the whole body of the voice — which is why high-passed hum removal leaves a recording both thin *and* still humming. What hum needs instead is a **comb** of very narrow notches.

## Hum, buzz or whine: three faults, three causes

The words get used interchangeably, but naming yours correctly narrows the hunt.

**Hum** is smooth and low, dominated by the fundamental — a fridge in another room. The cause is usually a **ground loop**, two devices connected to earth by more than one path so a small current circulates through your signal ground, or plain **induction**, meaning a microphone or its cable too close to a power cable, transformer, supply brick or lighting circuit.

**Buzz** is harsh and harmonic-rich, an angry insect rather than a fridge, and the classic source is a **light dimmer**. A phase-control dimmer chops part of each half-cycle of the mains waveform away, and a chopped waveform is by definition full of harmonics — strong odd harmonics in particular, because the chopping is symmetrical across both halves of the cycle. That energy radiates from the wiring and the fixture, so a dimmed room is hostile to recording. A poor ground and cheap switching supplies buzz similarly.

**Whine** is higher and thinner, wavering as something works harder: chargers and switch-mode supplies, **coil whine** from the regulators around a busy CPU or GPU — which is why it can appear only where your machine was rendering — and cheap LED or fluorescent drivers.

Two more sources are common at home. **USB-powered interfaces** draw power from the computer, and a computer's 5 V rail is electrically noisy, so a cheap interface without good isolation passes some of that into your recording. And **unbalanced cables** — jack-to-jack leads carrying signal and ground and nothing else — cannot reject interference, so a long run behaves as an antenna. A balanced cable carries the signal twice in opposite polarity and the input subtracts one from the other, so noise picked up equally by both cancels. That is often the entire difference.

## Diagnose the cause before you process anything

Hum removed at the source leaves no trace; hum removed by filtering always costs you something. Work through this before opening any software.

1. **Unplug things one at a time.** Record ten seconds of silence, pull one device from the wall — charger, monitor, lamp, printer, drive — and record ten more. One variable per test.
2. **Run the laptop on battery.** Lift it off the charger entirely; if the noise vanishes, you have found it.
3. **Move the microphone and its cable away from power.** Induced field strength falls off sharply with distance, and where a mic cable must cross a power cable, cross it at a right angle — parallel runs couple, perpendicular crossings barely do.
4. **Try a different outlet on the same circuit.** Putting the whole chain on one outlet removes the second earth path a ground loop depends on.
5. **Swap the cable.** Cables fail internally at the connectors, and a broken shield turns a good cable into an antenna.
6. **Look for the one unbalanced cable in an otherwise balanced chain.** Everything is XLR, and one short jack lead in the middle is undoing all of it.
7. **Test the dimmer at both extremes.** A dimmer only chops the waveform while it is dimming; fully on or fully off, the buzz should collapse.

The key distinction: **a ground loop needs a wiring fix, not a filter.** So does a failing cable. If moving one cable produces an audible improvement, that improvement is free and perfect — no processing will match it.

## Notch filtering, done right

A notch is a narrow band-reject filter that cuts one frequency and leaves its neighbours alone; the comb is a notch at the fundamental plus one at every harmonic, leaving the gaps between the teeth intact. What decides whether they work is **bandwidth**, expressed as **Q**: the centre frequency divided by the width of the cut. A notch at 50 Hz with a Q of 50 is about 1 Hz wide; at a Q of 5 it is about 10 Hz wide.

- **Too wide** and you scoop out real content: a generous notch at 100 Hz removes not only the second harmonic of a 50 Hz hum but a chunk of the body of a male voice — the thin, hollow, faintly telephone-like sound people rightly complain about after "removing the hum".
- **Too narrow** and you miss. Mains frequency drifts by fractions of a hertz as generation and demand shift across the grid, so a notch 0.2 Hz wide parked at exactly 50.00 Hz lets a 50.15 Hz hum sail past, and you hear it come and go as the grid breathes.

So: just wide enough to cover the drift and no wider, and — for anything longer than a clip — an approach that **tracks** rather than sits still, because hum level changes as electrical load in the building changes. A static notch set for the worst passage over-processes the quiet ones; set for the average, it leaves audible hum in the worst.

How far up the series to go is the last call. For hum, harmonics above roughly 1 kHz sit so far below the content that notching them costs more than it gains; for dimmer buzz they reach much higher and carry real energy, so the comb must extend further — which is why buzz is harder to remove cleanly than hum.

## Removing hum in SoundSpice

Most of the difficulty above is bookkeeping: find the fundamental, notch it, notch every multiple, choose a width for each, decide where to stop, and check you have not hollowed out the voice. [SoundSpice](/apps/soundspice/) does that from the recording itself. Drop in a file and it starts at once, with no setup screen and no faders: it detects the mains frequency present in your audio, notches out the fundamental and its harmonics, and reports in plain language what it found and what it applied — so you are told that 50 Hz hum was detected and notched, rather than handed a knob.

The spectrum comparison then puts original against processed on a log frequency axis with the regions the chain acted on shaded, so you can literally see the notches — narrow bites at 50, 100, 150 and 200 Hz with everything between them untouched — the fastest way to confirm it removed hum and not the bottom of the voice.

Hum is also one stage among several, in a deliberate order: rumble and DC offset first, so low-frequency junk is not confusing the measurement, then hum notching, then broadband noise reduction against a *measured* noise profile taken from your file — a different job needing a different tool, covered in our guide to [removing background noise from an audio recording](/blog/utilities/how-to-remove-background-noise-from-audio-recording/) — then the tonal and loudness work. Nothing is aggressive; every stage has guardrails, a stage that never fired is never claimed in the report, and the original file is never modified. It all runs on your iPhone, iPad or Mac with no upload and no account, and it is a one-time purchase.

{% include blog-cta.html app_slug="soundspice" %}

## Doing it manually

**Audacity** ships a dedicated **Notch Filter** effect, under Effect in the EQ and Filters group: you give it a frequency and a Q and it cuts that frequency. You apply it repeatedly, once per frequency — 50 Hz, then 100, then 150, then 200, up the series. There is no single control that says "hum". Audacity is free and open source and the filter is perfectly good; the labour is the cost, and it multiplies across a dozen files.

In a desktop DAW, a parametric EQ with narrow bands at the fundamental and its multiples builds the whole comb in one plugin instance — faster, and you can audition the comb as a whole.

Either way, **over-notching** is easy: you keep adding depth until the hum is gone and so is the warmth, and the change is gradual enough that you acclimatise to it — so compare against the original at matched loudness, often. And because a static comb does not follow hum that changes level, a long recording may need splitting into sections.

## When hum cannot be removed cleanly

Three situations resist notching.

**The hum sits directly under content at the same frequency.** A 50 Hz hum under an electric bass whose open E is 41 Hz, or a 60 Hz hum under a low male voice with strong energy at 120 Hz, is not separable — a notch at 120 Hz removes both. You are choosing which to sacrifice, and sometimes the notch is worse than the hum.

**The recording is hum-dominated.** If the hum approaches or exceeds the level of the wanted signal, removing it leaves a hole rather than a clean file: the notches are so deep and so numerous that what remains sounds gutted.

**The buzz is broadband.** Severe dimmer buzz or a failing supply can smear energy across so much of the spectrum that it stops being a comb of discrete tones and cannot be told apart from the content. At that point you are not notching, you are equalising the whole recording downward.

In all three cases a re-record beats any filter, and beats the hour you would spend fighting the file. The same limit applies to a take pushed past the ceiling — see our guide to [fixing clipped and distorted audio](/blog/utilities/how-to-fix-clipped-distorted-audio/) for where reconstruction stops working there too.

## Preventing it next time

- **Run on battery** — laptops, and recorders where possible.
- **Keep audio cables away from power cables**, crossing at right angles when they must cross.
- **Use balanced cables and inputs wherever you have them.**
- **Do not dim the lights while recording.** Use fewer fixtures or move them instead.
- **Put the whole audio chain on one outlet, on one circuit.** One earth path, no loop.
- **Monitor with headphones from the first second.** Hum is obvious in headphones and nearly inaudible on a laptop speaker — the difference between catching it in ten seconds and after an hour of interview.

Working from a script through a teleprompter such as [CueVoice](/apps/cuevoice/) also means fewer takes and less exposure to whatever the room is doing electrically, as our guide to the [best teleprompter apps for content creators and public speakers](/blog/productivity/best-teleprompter-apps-for-content-creators-and-public-speakers/) explains. An inventory of your cables and interfaces in something like [Equipt](/apps/equipt/) makes it easier to spot the one unbalanced lead that keeps reappearing in your problem files. And speech recognition is measurably happier without a 150 Hz drone under every word, so cleaning first and then running the file through [Transcribe](/apps/transcribe/) beats the other order — see [how to use AI to transcribe audio and voice notes on iPhone](/blog/productivity/how-to-use-ai-to-transcribe-audio-and-voice-notes-on-iphone/).

For the everyday version — a voice memo with hum, room noise and uneven levels at once — our walkthrough on [making a voice memo sound professional](/blog/utilities/make-voice-memo-sound-professional-iphone/) puts the chain in order, and the [best apps for content creators](/blog/productivity/best-apps-content-creators-iphone/) rounds out the kit.

## Frequently asked questions

### How do I know if my hum is 50 Hz or 60 Hz?
Geography settles it almost always: 50 Hz in Europe, most of Africa and Asia, and Australia; 60 Hz in North America, Brazil and much of the rest of the Americas. Japan is split, 50 Hz in the east including Tokyo and 60 Hz in the west including Osaka. Confirm on a spectrum of a quiet passage, where the spikes sit 50 Hz apart (50, 100, 150) or 60 Hz apart (60, 120, 180).

### Why does removing hum make my recording sound thin?
Almost always because the notches were too wide, or because a high-pass filter was used instead of notches. Harmonics at 100, 150 and 200 Hz sit in the same range as the body of a human voice, so a generous cut there removes warmth along with noise. Use the narrowest notch that still catches the hum, and compare at matched loudness.

### Can I remove buzz without hurting the voice?
Often, but less reliably than hum, because dimmer buzz has strong harmonics reaching far higher up the spectrum where speech carries a lot of energy. Narrow notches work well while the buzz is still tonal. Once it has smeared into broadband noise no notch will separate it, and the fix is to turn the dimmer fully on or off and record again.

### Why did the hum only appear on one channel?
Because the two channels are not electrically identical: an unbalanced cable on one side of a stereo pair, a bad ground on one input, or one mic cable routed nearer a power cable. Swap the two cables and re-test — if the hum follows the cable, the cable is at fault; if it stays on the same channel, the input is.

### Will a high-pass filter fix hum?
No. A high-pass at 80 Hz removes a 50 or 60 Hz fundamental and leaves every harmonic above it — 100, 150, 200, 250 Hz — untouched, and those are usually what listeners actually hear on phones and laptops. Catching them with a slope would mean cutting several hundred hertz up and losing the low end of the voice.

### Does hum removal also get rid of hiss and room noise?
No, they are separate problems needing separate tools. Hum is a set of discrete tones at exact frequencies, handled by notches; hiss and room tone are broadband, handled by noise reduction measured against a profile of the noise in your file.
