# Setting Up Your CV Download Functionality

This document explains how to properly set up the CV/resume download functionality in your portfolio website.

## Step 1: Prepare Your CV File

1. Create your CV/resume as a PDF file
2. Name it `Oluwadamisi_Damilola_CV.pdf` (or update the code to match your filename)
3. Make sure the file is not too large (ideally under 5MB)

## Step 2: Add Your CV to the Project

When you download and deploy this portfolio:

1. Create a folder called `cv` inside the `public` directory:
   \`\`\`
   public/
   └── cv/
   \`\`\`

2. Place your CV file in this folder:
   \`\`\`
   public/
   └── cv/
       └── Oluwadamisi_Damilola_CV.pdf
   \`\`\`

## Step 3: Update the Code (if needed)

If you named your CV file differently, update the following lines in `app/page.tsx`:

\`\`\`javascript
// Find this function in the file
const handleDownloadCV = () => {
  const link = document.createElement("a");
  link.href = "/cv/YOUR_FILENAME.pdf"; // Update this line
  link.download = "YOUR_FILENAME.pdf"; // Update this line
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
\`\`\`

Also update any instances of `window.open("/cv/Oluwadamisi_Damilola_CV.pdf", "_blank")` to use your filename.

## Step 4: Test After Deployment

After deploying your site:

1. Click the "Download Resume" button to verify it downloads your CV
2. Click the "View CV" button to verify it opens your CV in a new tab

## Troubleshooting

If the CV download doesn't work after deployment:

1. **Check file path**: Ensure your CV is in the correct location (`public/cv/`)
2. **Check file name**: Ensure the filename matches exactly what's in the code
3. **Check file format**: Ensure your CV is a valid PDF file
4. **Check file permissions**: Ensure the file has proper read permissions
5. **Check browser console**: Look for any errors in the browser's developer console

## Alternative Approaches

If you prefer not to host your CV directly on your website, you can:

1. **Use Google Drive**: Upload your CV to Google Drive, make it public, and link to it
2. **Use Dropbox**: Upload your CV to Dropbox, create a shared link, and use that
3. **Use a PDF hosting service**: Services like PDF.io or DocDroid can host your PDF

To implement these alternatives, update the `handleDownloadCV` function to point to your external URL.
