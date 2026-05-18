export const mockPosts = [
  {
    _id: 'mock-1',
    title: 'What Histopathology Taught Me About Noisy Data',
    slug: 'histopathology-noisy-data',
    excerpt:
      'Whole-slide images are enormous, heterogeneous, and full of artifacts. Working with them at Fred Hutch changed how I think about data quality in machine learning.',
    body: `## The Scale Problem

A single whole-slide image of a tissue biopsy can exceed 100,000 × 100,000 pixels. At that scale, the usual intuitions about data preprocessing break down. You cannot load the image into memory. You cannot eyeball the distribution. You are essentially blind to the global structure while trying to reason locally.

The first thing that surprised me was how much of the "data" is not really data — it's glass, tissue folds, staining inconsistencies, scanner artifacts. Before any model sees a patch, you need a tissue detection step that is itself a small ML problem.

## What Changes When the Labels Are Clinical

In academic benchmarks, labels are usually clean or at worst noisily labeled by non-experts. In clinical histopathology, the labels come from pathologists, which sounds authoritative — and it is — but pathologist agreement on ambiguous cases is often lower than you'd expect. When your model's job is to predict a biomarker that even trained humans disagree about, what does "ground truth" mean?

This pushed me toward thinking carefully about uncertainty quantification. A model that outputs a hard label is hiding information the downstream clinician actually needs.

## The Cross-Domain Payoff

My physics background turned out to be unexpectedly useful here. Treating the slide as a spatial signal — thinking in terms of texture frequencies, local coherence, spatial autocorrelation — gave me a different angle on feature engineering than a pure deep-learning framing would have. Convolutional filters are, in the frequency domain, exactly the spatial filters I had already been thinking about in optics.

The connection is not metaphorical. It is mathematical. And realizing that made the work feel more coherent.`,
    tags: ['machine-learning', 'research', 'data-science'],
    published: true,
    publishedAt: new Date('2026-02-10'),
    createdAt: new Date('2026-02-08'),
    updatedAt: new Date('2026-02-10'),
  },
  {
    _id: 'mock-2',
    title: 'Fourier Optics and the FFT: Two Languages, One Idea',
    slug: 'fourier-optics-and-fft',
    excerpt:
      'Diffraction patterns and discrete Fourier transforms are the same mathematical object — one in light, one in data. Here is why that connection still interests me.',
    body: `## The Aperture as a Low-Pass Filter

When coherent light passes through a small aperture, it spreads. The far-field diffraction pattern is, precisely, the Fourier transform of the aperture function. This is not an approximation — it is the Fraunhofer diffraction integral, exact in the paraxial limit.

Open a Jupyter notebook and run \`np.fft.fft2\` on a binary mask of the same aperture shape. You get the identical pattern.

One lives in electromagnetic fields propagating through space. The other lives in a NumPy array on your laptop. The mathematics does not know the difference.

## Why It Matters for Data Science

The intuition transfers cleanly. A convolutional neural network's filters are, in the frequency domain, multiplicative masks — exactly what an optical spatial filter does physically. Understanding one deepens the other.

Cross-domain connections like this are the most reliable sign that you have understood something true about the world, rather than merely learned a technique.`,
    tags: ['optics', 'mathematics', 'python'],
    published: true,
    publishedAt: new Date('2025-11-18'),
    createdAt: new Date('2025-11-16'),
    updatedAt: new Date('2025-11-18'),
  },
  {
    _id: 'mock-3',
    title: 'On Teaching Physics at a STEM Camp',
    slug: 'teaching-physics-stem-camp',
    excerpt:
      'Two summers at the Museum of Flight taught me that the hardest part of explaining a physical idea is deciding what to leave out.',
    body: `## The Question That Stopped Me

A twelve-year-old asked me why a wing generates lift. I started to explain Bernoulli's principle — and then stopped. I had just remembered that the "longer path" explanation of Bernoulli lift is technically wrong, or at least vastly oversimplified. The real answer involves circulation, bound vortices, and the Kutta condition.

None of that was useful to a twelve-year-old. But I also did not want to hand them a wrong model they would have to unlearn later.

## The Pedagogical Tradeoff

Every simplification in physics education is a small lie told in service of a larger truth. The question is whether the lie is load-bearing — whether it will actively obstruct future understanding, or whether it is just scaffolding that can be quietly removed later.

Bernoulli (correctly applied to pressure differences from curvature) is not load-bearing scaffolding. It is a reasonable first model. So I used it — carefully, with the caveat that the full story was more interesting.

## What I Took Back to Research

Explaining things to novices is the fastest way to find the gaps in your own understanding. Every time I stumbled over an explanation at the Museum of Flight, it flagged something I did not understand as well as I thought I did.

I try to keep that habit now: if I cannot explain something simply, I probably do not understand it yet.`,
    tags: ['teaching', 'physics', 'reflection'],
    published: true,
    publishedAt: new Date('2025-09-04'),
    createdAt: new Date('2025-09-02'),
    updatedAt: new Date('2025-09-04'),
  },
];
