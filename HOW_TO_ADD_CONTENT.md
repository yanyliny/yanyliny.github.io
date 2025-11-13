# How to Add Content to Your Website

## Adding Posts to Happenings Page

1. Open `src/data/happenings.ts`
2. Add a new entry to the `happenings` array:

```typescript
{
  image: 'https://your-image-url.jpg',
  title: 'Your Post Title',
  description: 'Your post description here.',
  date: '2025-01-15' // Format: YYYY-MM-DD
},
```

### Image Options:
- **External URL**: Use any image hosting service (Imgur, Cloudinary, etc.)
- **Local file**: Place image in `public/` folder and use `/image-name.jpg`

### Example:
```typescript
export const happenings: Happening[] = [
  {
    image: 'https://i.imgur.com/example.jpg',
    title: 'Lab Equipment Arrived',
    description: 'Finally got the new PIV system set up in the lab!',
    date: '2025-01-20'
  },
  {
    image: '/lab-photo.jpg', // Place this in public/ folder
    title: 'Conference Presentation',
    description: 'Presented our bubble resonance work at the APS conference.',
    date: '2025-01-15'
  },
]
```

## Adding Images to Publications

1. Open `src/pages/Projects.tsx`
2. Find the project you want to add an image to
3. Add the image URL to the `image:` field:

```typescript
{
  title: 'Your Paper Title',
  status: 'Published',
  venue: 'Journal Name',
  year: '2025',
  image: 'https://your-image-url.jpg', // Add your image URL here
  laySummary: '...',
  technicalSummary: (...)
}
```

### Tips for Publication Images:
- Use figures from your paper (graphs, schematics, photos)
- Recommended aspect ratio: 16:9 or similar
- Images will zoom on hover for a nice effect
- If image URL is broken or empty (''), nothing will show

## After Making Changes

1. Save the file
2. Run `npm run build` to build the site
3. Commit and push changes:
   ```bash
   git add .
   git commit -m "Add new content"
   git push
   ```
4. GitHub Actions will automatically deploy your changes

## Where to Host Images

**Free options:**
- **Imgur** (imgur.com) - Easy, no account needed
- **GitHub** - Add to your repo and use: `https://raw.githubusercontent.com/yourusername/repo/main/path/to/image.jpg`
- **Cloudinary** (cloudinary.com) - Free tier available

**Local option:**
- Place images in the `public/` folder
- Reference them with `/image-name.jpg` (note the leading slash)
