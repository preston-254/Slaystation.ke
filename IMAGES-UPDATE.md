# Update the images folder on GitHub

Your site uses these paths (keep the same structure when updating):

| Path | Used for |
|------|----------|
| `images/bags/` | Product bag images (hero carousel, product cards) |
| `images/brands/` | Brand logos (Chanel, Coach, Louis Vuitton, etc.) |
| `images/banner/` | Promo banner images/videos (e.g. banner1.mp4) |

## Steps to update images and push to GitHub

1. **Put your files in the right place**  
   In the `deploy` folder, place new or replaced images in:
   - `deploy/images/bags/` for bag photos  
   - `deploy/images/brands/` for brand logos  
   - `deploy/images/banner/` for banner assets  

2. **From the project root** (parent of `deploy`, where `.git` lives):
   ```powershell
   cd "C:\Users\USER\Documents\slaystation bags\slaystation"
   git add deploy/images/
   git status
   git commit -m "Update images folder"
   git push origin main
   ```

3. **If your repo root is the deploy folder** (you see `index.html` and `images/` in the same place when you open the repo):
   ```powershell
   cd "C:\Users\USER\Documents\slaystation bags\slaystation\deploy"
   git add images/
   git status
   git commit -m "Update images folder"
   git push origin main
   ```

After pushing, Vercel (or your host) will redeploy and the updated images will be live.

**Tip:** Use lowercase filenames and avoid spaces when you can (e.g. `black-coach-1.jpg`). If you use spaces, the site will encode them (e.g. `black%20coach%201.jpg` in URLs).
