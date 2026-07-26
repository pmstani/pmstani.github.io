---
layout: post
title: "Audio File Formats Explained: WAV, AIFF, FLAC, ALAC, MP3 & M4A"
description: "Audio file formats explained: WAV vs AIFF vs FLAC vs ALAC vs MP3 vs M4A, sample rate and bit depth, generation loss, and which format each destination needs."
date: 2026-07-26
categories: [utilities]
tags: [audio-formats, wav, flac, alac, aac, lossless-audio, audio-enhancement, file-conversion]
silo: audio-enhancement
pillar: audio-enhancement
related_apps: [soundspice, ebouquin, transcribe, pdf-compressor, tidy-downloads]
---

You finish the recording, hit export, and a sheet appears with five options — WAV, AIFF, FLAC, ALAC, M4A — plus menus for sample rate and bit depth. Nothing tells you which combination the person waiting for the file needs, and the internet divides between "always use WAV" and "nobody can hear the difference, use MP3." Both are wrong often enough to be useless.

This is the map: the three families of audio format, the four numbers that decide how a file sounds, the one mistake that degrades audio irreversibly, and what to export for each destination.

## The three families

Almost every audio file belongs to one of three families, and the family matters more than the format.

**Uncompressed PCM** stores the raw stream of numbers that came out of the analogue-to-digital converter. WAV, AIFF and Apple's CAF are containers around identical PCM data: big, simple, readable by anything.

**Lossless compressed** — FLAC and ALAC principally — packs that same stream into fewer bytes, the way a ZIP archive shrinks a spreadsheet. Decode a FLAC and you get back bit-for-bit the samples you put in. So a WAV and a FLAC of the same recording represent *exactly the same audio*: they differ in size, metadata handling and what software opens them, not in sound.

**Lossy compressed** — MP3, AAC (usually in an `.m4a`), Ogg Vorbis, Opus — is a different animal. It decides which parts of the signal hearing is unlikely to notice and discards them permanently, so what comes back is a plausible reconstruction, not the original. At a sensible bit rate that is hard to hear; done badly, or twice, it is obvious.

## The four numbers that decide quality

Within the lossless families the format barely matters. These four parameters do.

### Sample rate

A digital recording is a series of snapshots of air pressure; the sample rate is how many per second. The Nyquist–Shannon sampling theorem sets the limit on what that buys: a sample rate represents frequencies up to *half* its value and no higher.

That explains the standard rates. **44.1 kHz** is the CD rate, chosen because half of it, 22.05 kHz, clears the roughly 20 kHz ceiling of human hearing. **48 kHz** is the video and broadcast standard, and the sensible default if the audio will ever meet picture. **96 kHz** and **192 kHz** are high-resolution capture rates.

The honest version of the high-resolution argument: doubling the rate lets nobody hear more, because nothing audible lived up at 22 kHz to begin with. What it buys is engineering headroom — gentler anti-alias filters, and room for the harmonics processing generates before they fold back into the audible band. That helps inside a production chain, not on playback.

### Bit depth

Bit depth governs dynamic range: the distance between the loudest and quietest representable sounds. Each bit adds about 6 dB, so **16-bit** gives roughly 96 dB of theoretical range and **24-bit** roughly 144 dB. **32-bit float** effectively removes the ceiling, which is why editors work in it internally.

The consequence is not that 24-bit sounds better; it is that 24-bit lets you be careless in the safe direction. Record with peaks near −18 dBFS and you have thirty decibels of protection against an unexpected shout, with the noise floor still far below the room. Deliver at 16-bit. If you hit the ceiling anyway, our guide to [fixing clipped and distorted audio](/blog/utilities/how-to-fix-clipped-distorted-audio/) explains what can be recovered.

### Channels

One person and one microphone is a mono recording, and saving it as mono halves the file for zero loss. Stereo earns its place when there is something to place in a field: music, ambience, or two speakers either side of a stereo mic. A mono source duplicated to two identical channels is not stereo, just a bigger file.

### Bit rate

Bit rate only means anything for lossy formats: it is the budget the encoder has to spend. **128 kbps** was the early MP3 default and shows its seams, turning cymbals to slush. **192–256 kbps AAC** is transparent for most listeners on most material, which is why it became the distribution standard. At a given bit rate AAC generally beats MP3, being the later design.

## Format by format

### WAV — the universal uncompressed default

WAV, Microsoft's RIFF container around PCM, is the closest thing audio has to a lingua franca. Everything opens it and there is no decoding step to get wrong, so it is what you hand an editor whose tools you do not know.

The cost is size. At 48 kHz, 24-bit, stereo you store 48,000 × 3 bytes × 2 channels = 288,000 bytes a second; a minute is 17.28 million bytes, about 16.5 MB in binary megabytes, and an hour-long interview is around a gigabyte.

Two limits bite. The original RIFF header stores sizes in 32-bit fields, capping a WAV at **4 GB** — roughly four hours at 48 kHz/24-bit/stereo, and the failure mode is a truncated file rather than a warning. Metadata support is also weak: the chunks exist but implementations are patchy, so titles and notes often do not survive.

### AIFF — the same thing, Apple's way

AIFF is Apple's uncompressed PCM format, WAV's twin in everything that affects sound: same samples, same size. Its advantage is metadata, since it carries ID3-style tags properly, so a library of AIFFs keeps titles and comments where WAVs will not.

### CAF — for recordings that run long

Core Audio Format is Apple's container built to escape the 4 GB wall, using 64-bit offsets so length is effectively unlimited. Support outside Apple's world is thin, so it is no use for distribution, but for a six-hour recording it beats WAV.

### FLAC — the archival default

The Free Lossless Audio Codec, maintained by the Xiph.Org Foundation, is the format to keep things in: open, patent-unencumbered, and typically **40–60% smaller than the equivalent WAV** depending on material — speech and sparse acoustic recordings compress best, dense loud music least. Its metadata model is excellent, and per-frame checksums let you verify a file has not rotted.

Compatibility used to be the argument against it and no longer is: support is near-universal, and Apple's operating systems have read FLAC natively for several releases. To hold masters for twenty years, it is the defensible answer.

### ALAC — Apple Lossless

ALAC does the same job with comparable compression, and Apple open-sourced it in 2011. Inside an all-Apple workflow it is frictionless, because every Apple app treats it as first-class; outside, support is thinner than FLAC's. Pick by ecosystem.

### MP3 — the compatibility floor

MP3 is dated and still indispensable: it is the only format you can send to an unknown recipient knowing whatever they own will play it.

The limits are real. It is mono or stereo only in any form you will meet, and its gapless behaviour is imperfect by design: the encoder pads the start and end of the stream, and not every decoder honours the informal LAME/Xing header that flags the padding, so a continuous recording split into tracks can click at the joins. Use it at 192 kbps or better.

### AAC and M4A — the modern lossy default

AAC, standardised as part of MPEG-4 Audio, is what replaced MP3 in practice: better sounding at equal bit rates, and the expectation of every modern platform. An `.m4a` file is an MP4 container that usually holds AAC — though the extension also carries ALAC, so an `.m4a` can be lossy or lossless.

For delivery, **AAC at 256 kbps** is the sweet spot: effectively transparent, a fraction of the WAV's size, accepted everywhere. It is what Apple Podcasts and most publishing platforms want, and what listeners receive whatever you upload.

### Ogg Vorbis and Opus — the open lossy pair

Vorbis is Xiph.Org's open lossy codec, roughly AAC-class, still found in games and open-source tooling. Opus, defined by the IETF in RFC 6716, is exceptionally good at low bit rates and now the default for real-time voice, since most video-conferencing audio is Opus. You will therefore *receive* it more often than you send it; as a delivery format for finished audio it stays uncommon.

### The audio inside an MP4 or MOV

A video file is a container with separate tracks, and its audio track is usually AAC. Pulling it out is a **remux**, not a re-encode: the bytes are copied into a new container unchanged, so it costs nothing in quality. A tool that instead decodes and re-encodes to another lossy format costs you a generation of loss for nothing.

## Generation loss: the one idea worth remembering

Every lossy encode discards information permanently. Encode a file that has *already* been through a lossy encoder and the second pass discards more, while faithfully preserving the first pass's artefacts as though they were signal. The damage compounds and nothing recovers it — the same trap as brightening a JPEG, saving it as a JPEG again, and repeating until the sky turns to blocks.

So the workflow never changes:

1. **Keep a lossless master** — WAV, AIFF, FLAC or ALAC. This is the file you back up.
2. **Process from the lossless source**: noise reduction, EQ, loudness, edits.
3. **Encode to lossy once, at the end, per destination**, each export generated fresh from the master, never from another lossy file.

The corollary catches people out: if all you have *is* a lossy file, that is your master, so process it once and export lossless. It is also why converting an MP3 to WAV does not improve it.

## Which format for which destination

This is the decision the export sheet is really asking about.

| Destination | Format | Sample rate / depth | Loudness |
|---|---|---|---|
| Sending to a person | M4A (AAC 256 kbps) | 48 kHz, source channels | −16 LUFS |
| Publishing a podcast episode | M4A (AAC 256 kbps) | 44.1 or 48 kHz, mono if one voice | −16 LUFS stereo, −1 dBTP |
| Handing to an editor or mixer | WAV or FLAC | 48 kHz, 24-bit | As-is, keep the headroom |
| Archiving a master | FLAC (or ALAC on Apple) | Native rate, 24-bit | As-is |
| Uploading to a streaming platform | WAV or FLAC | 44.1 kHz or native, 24-bit | −14 LUFS, −1 dBTP |
| Feeding a transcription tool | WAV or M4A, mono | 16–48 kHz, 16-bit | Normalised, consistent |
| Attaching to video | WAV or AAC | 48 kHz, 24-bit for the edit | −16 LUFS web, −23 LUFS broadcast |

Those loudness figures are the ones the platforms publish: streaming normalises to around **−14 LUFS**, Apple's podcast guidance is **−16 LUFS** stereo (−19 LUFS mono, since a mono file plays out of both speakers), and European broadcast follows **EBU R128 at −23 LUFS ±0.5** — all measured by ITU-R BS.1770, under a **−1 dBTP** ceiling that leaves room for encoder distortion. Our [explainer on LUFS and loudness normalisation](/blog/utilities/lufs-loudness-normalization-podcast-explained/) covers why hitting these matters more than being loud.

## Metadata: what survives a conversion

If you keep an archive of interviews or field recordings, the tags are half the value. A folder of files called `REC_0043.wav` is not an archive.

Support varies sharply. **FLAC** uses Vorbis comments and handles arbitrary fields, long text and artwork gracefully; **ALAC and M4A** use the MP4 atom system, well supported across Apple software; **AIFF** and **MP3** carry ID3 tags reliably. **WAV** is the weak link: its chunks are inconsistently implemented, so tags written by one application are often invisible to the next and silently dropped on conversion.

Conversion is where metadata dies, because a tool that re-encodes without deliberately copying tags across hands back a clean, anonymous file. Verify your export path preserves them — [SoundSpice](/apps/soundspice/) carries source metadata through — before running it across two hundred files, and let [Tidy Downloads](/apps/tidy-downloads/) file the results by type.

## Doing it in SoundSpice

[SoundSpice](/apps/soundspice/) is an audio enhancer that happens to read and write nearly everything, not a batch format converter — and that solves the format problem almost as a side effect: hand it whatever you were given and get back what the destination needs, repaired on the way, with no lossy round trip.

It opens WAV, AIFF, CAF, MP3, AAC/M4A, ALAC, FLAC, Ogg Vorbis, Opus and the audio track of MP4/MOV files at rates up to 192 kHz — including the Opus from a remote interview and the AAC inside a screen recording.

It exports M4A (AAC 256 kbps), ALAC, WAV, AIFF or FLAC with the source metadata intact, at a loudness target chosen for the destination: −14 LUFS streaming, −16 LUFS podcast, −23 LUFS EBU R128 broadcast, or as-is. So the workflow above collapses into one pass: clean the file you were sent, then write a lossless master and the publication AAC from the same processed audio.

The repair in between is measurement-driven rather than preset-driven: it profiles the actual noise floor before reducing it, notches mains hum at 50 or 60 Hz where it finds it, reconstructs clipped peaks, tames sibilance and corrects tonal balance with wide gentle EQ, each stage only where the analysis calls for it. Then it shows its work — a spectrum comparison with the acted-on regions shaded, before-and-after LUFS, true peak and noise floor, and a plain-language report of what it found and applied.

The A/B is loudness-matched, so louder cannot pass for better, and your original file is never modified. All of it runs on your iPhone, iPad or Mac, and the app contains no networking code at all, so nothing is uploaded. On the Mac you drag the result straight into Finder or Mail.

{% include blog-cta.html app_slug="soundspice" %}

It will not perform miracles: audio captured across a tiled room, or clipped so hard the peaks are gone, comes back better but not fixed. Our roundup of [audio enhancer and noise removal apps for iPhone, iPad and Mac](/blog/utilities/best-audio-enhancer-noise-removal-apps-iphone-ipad-mac/) sets it against the alternatives, including cloud services that upload your recording first — a trade-off examined in our comparison of [on-device AI versus cloud AI](/blog/productivity/on-device-ai-vs-cloud-ai-privacy-performance/). Starting from a phone recording, [making a voice memo sound professional](/blog/utilities/make-voice-memo-sound-professional-iphone/) is the practical companion.

## The same argument, one shelf over

None of this is specific to audio. Anyone with a serious ebook library has had the identical argument about EPUB, MOBI, AZW3 and PDF and reached the same conclusion: keep the master in an open format no company controls, and generate the derivative a device demands. Our guide to [ebook formats explained](/blog/productivity/ebook-formats-explained-epub-mobi-azw3-pdf/) makes that case, and [eBouquin](/apps/ebouquin/) enforces it by reading a standard Calibre library in place rather than importing books into something proprietary. FLAC is to your recordings what EPUB is to your books. Documents carry the trade-off too: compressing with [PDF Compressor](/apps/pdf-compressor/) means trading visual detail for megabytes, exactly as choosing an AAC bit rate does.

One downstream note. If the reason for cleaning a recording is speech-to-text, level and noise matter far more than format: a mono, normalised, de-noised file transcribes more accurately than the raw original. [Transcribe](/apps/transcribe/) handles that end, and our guide to [transcribing audio and voice notes on iPhone](/blog/productivity/how-to-use-ai-to-transcribe-audio-and-voice-notes-on-iphone/) covers the workflow. For the wider toolkit, see the [best apps for content creators](/blog/productivity/best-apps-content-creators-iphone/).

## Frequently asked questions

### Which audio format has the best quality?
Uncompressed PCM (WAV, AIFF) and lossless formats (FLAC, ALAC) all represent audio identically, so none is higher quality than the others; they differ in size, metadata and compatibility. Quality is set by the sample rate, the bit depth and, for lossy formats, the bit rate.

### Is FLAC better than WAV?
Not in sound, because FLAC decodes to bit-identical PCM. It is better for storage: typically 40–60% smaller, with better metadata support and checksums that verify the file has not corrupted. WAV's advantage is that anything opens it without a decoding step.

### Does converting an MP3 to WAV improve the quality?
No, and it cannot. The MP3 encoder discarded information permanently, so converting to WAV stores what is left in a much larger file that sounds the same. It is only worth doing before processing or editing, because it prevents any *further* loss.

### What audio format should I use for a podcast?
M4A with AAC at 256 kbps, at 44.1 or 48 kHz, mono for a single voice. Target −16 LUFS integrated for stereo (−19 LUFS mono, per Apple's guidance) with a −1 dBTP ceiling. Keep a lossless master of the finished mix and generate the AAC from that.

### Should I record at 24-bit or 16-bit?
Record 24-bit, deliver 16-bit. The extra bits give roughly 144 dB of theoretical dynamic range instead of 96 dB, so you can set conservative levels, stay clear of unexpected loud moments, and still keep the noise floor far below the room's own.

### Is recording at 192 kHz worth it?
Rarely. Nyquist means 48 kHz already covers everything up to 24 kHz, above the limit of human hearing, so higher rates do not let listeners hear more. They do allow gentler filters and more processing headroom — but against four times the file size, 48 kHz is the sensible default.

### What format works best for transcription?
Mono 16-bit WAV or a 256 kbps M4A both work well, since transcription engines care more about clarity than format. What helps is collapsing the file to a single channel, normalising the level, and removing steady noise and hum first. Clean the audio, then transcribe.
