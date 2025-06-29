# Client Project Images

This folder contains project images for each client's gallery in the Client Blocks section.

## Folder Structure

Each client has their own folder with 6 images for their project gallery:

### Current Client Folders:
- `blue-otter/` - Blue Otter Digital project images
- `cadence-bank/` - Cadence Bank project images  
- `jurassic-quest/` - Jurassic Quest project images
- `live-nation/` - Live Nation project images
- `chantal/` - Chantal project images
- `denise-austin/` - Denise Austin project images
- `flat-out/` - Flat Out project images
- `landshark/` - Landshark project images
- `pr-luxury-media/` - PR Luxury Media project images
- `ron-hoover/` - Ron Hoover project images
- `sectigo/` - Sectigo project images
- `sidney-garber/` - Sidney Garber project images
- `snack-subscription/` - Snack Subscription project images
- `yak-attack/` - Yak Attack project images
- `zach-and-zoe/` - Zach and Zoe project images
- `dragons-and-beasties/` - Dragons and Beasties project images
- `margaritaville-resorts/` - Margaritaville Resorts project images
- `margaritaville/` - Margaritaville project images

## Image Requirements

For each client folder, add 6 images named:
- `image-1.jpg` (or .png/.webp)
- `image-2.jpg`
- `image-3.jpg`
- `image-4.jpg`
- `image-5.jpg`
- `image-6.jpg`

### Image Specifications:
- **Format**: JPG, PNG, or WebP
- **Size**: Minimum 800x800px recommended
- **Aspect Ratio**: Any ratio (will be displayed as squares)
- **Quality**: High resolution for lightbox viewing

## Usage

Once you add your actual project images to these folders, update the `images` arrays in `components/ClientBlocksSection.tsx` to reference your real images instead of the placeholder Pexels images.

Example:
```typescript
images: [
  '/images/client-projects/blue-otter/image-1.jpg',
  '/images/client-projects/blue-otter/image-2.jpg',
  '/images/client-projects/blue-otter/image-3.jpg',
  '/images/client-projects/blue-otter/image-4.jpg',
  '/images/client-projects/blue-otter/image-5.jpg',
  '/images/client-projects/blue-otter/image-6.jpg',
],
```

## Current Status

The Client Blocks section is currently using placeholder images from Pexels. Replace these with your actual project images when ready.