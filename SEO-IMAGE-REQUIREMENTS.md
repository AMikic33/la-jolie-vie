# SEO Image Requirements for La Jolie Vie

## Open Graph Image (og-image.jpg)

### Required Specifications:
- **Dimensions**: 1200 x 630 pixels (recommended by Facebook/LinkedIn)
- **Format**: JPG or PNG
- **Max File Size**: Under 8MB (ideally under 300KB for fast loading)
- **Location**: `/public/og-image.jpg`

### Design Recommendations:
1. **Primary Content**: 
   - La Jolie Vie logo prominently displayed
   - High-quality image of a well-groomed dog
   - Business name clearly visible

2. **Text Overlay** (keep it minimal):
   - "La Jolie Vie"
   - "Premium Hundesalon München"
   - Optional: Phone number or website

3. **Design Tips**:
   - Use brand colors (green #053027 and complementary colors)
   - Ensure text is readable on mobile (avoid small fonts)
   - Keep important content within the "safe zone" (centered area)
   - Avoid placing critical information at edges (may be cropped)

4. **Testing**:
   - Preview on Facebook Sharing Debugger: https://developers.facebook.com/tools/debug/
   - Preview on LinkedIn Post Inspector: https://www.linkedin.com/post-inspector/
   - Preview on Twitter Card Validator: https://cards-dev.twitter.com/validator

### Alternative Images to Create:
- `favicon.ico` (16x16, 32x32, 48x48 multi-resolution)
- `logo192.png` (192x192 for Android)
- `logo512.png` (512x512 for iOS)
- `dog-paw.png` (96x96 - appears to exist already)

## Next Steps:
1. Create the og-image.jpg using Canva, Figma, or Photoshop
2. Place it in the `/public/` folder
3. Update if needed (already configured in index.html)
4. Test using the validators above
5. Monitor Google Search Console after deployment
