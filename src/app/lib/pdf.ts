import chromium from "@sparticuz/chromium-min";
import puppeteer from "puppeteer-core";

const getSvg = () => {
  return `<?xml version='1.0' encoding='iso-8859-1'?>
  <svg version='1.1' baseProfile='full'
                xmlns='http://www.w3.org/2000/svg'
                        xmlns:rdkit='http://www.rdkit.org/xml'
                        xmlns:xlink='http://www.w3.org/1999/xlink'
                    xml:space='preserve'
  width='250px' height='200px' viewBox='0 0 250 200'>
  <!-- END OF HEADER -->
  <rect style='opacity:1.0;fill:#FFFFFF;stroke:none' width='250.0' height='200.0' x='0.0' y='0.0'> </rect>
  <path class='bond-0 atom-0 atom-1' d='M 128.1,126.7 L 90.4,138.5' style='fill:none;fill-rule:evenodd;stroke:#000000;stroke-width:2.0px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1' />
  <path class='bond-0 atom-0 atom-1' d='M 123.0,122.1 L 91.9,131.8' style='fill:none;fill-rule:evenodd;stroke:#000000;stroke-width:2.0px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1' />
  <path class='bond-1 atom-1 atom-2' d='M 90.4,138.5 L 61.4,111.8' style='fill:none;fill-rule:evenodd;stroke:#000000;stroke-width:2.0px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1' />
  <path class='bond-2 atom-2 atom-3' d='M 61.4,111.8 L 70.1,73.3' style='fill:none;fill-rule:evenodd;stroke:#000000;stroke-width:2.0px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1' />
  <path class='bond-2 atom-2 atom-3' d='M 67.9,109.7 L 75.1,77.9' style='fill:none;fill-rule:evenodd;stroke:#000000;stroke-width:2.0px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1' />
  <path class='bond-3 atom-3 atom-4' d='M 70.1,73.3 L 107.7,61.5' style='fill:none;fill-rule:evenodd;stroke:#000000;stroke-width:2.0px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1' />
  <path class='bond-4 atom-4 atom-5' d='M 107.7,61.5 L 136.7,88.2' style='fill:none;fill-rule:evenodd;stroke:#000000;stroke-width:2.0px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1' />
  <path class='bond-4 atom-4 atom-5' d='M 106.2,68.2 L 130.2,90.3' style='fill:none;fill-rule:evenodd;stroke:#000000;stroke-width:2.0px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1' />
  <path class='bond-5 atom-5 atom-6' d='M 136.7,88.2 L 152.8,83.2' style='fill:none;fill-rule:evenodd;stroke:#000000;stroke-width:2.0px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1' />
  <path class='bond-5 atom-5 atom-6' d='M 152.8,83.2 L 168.8,78.2' style='fill:none;fill-rule:evenodd;stroke:#0000FF;stroke-width:2.0px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1' />
  <path class='bond-6 atom-6 atom-7' d='M 181.9,79.4 L 190.8,87.6' style='fill:none;fill-rule:evenodd;stroke:#0000FF;stroke-width:2.0px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1' />
  <path class='bond-6 atom-6 atom-7' d='M 190.8,87.6 L 199.8,95.9' style='fill:none;fill-rule:evenodd;stroke:#000000;stroke-width:2.0px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1' />
  <path class='bond-6 atom-6 atom-7' d='M 177.9,83.8 L 186.8,92.0' style='fill:none;fill-rule:evenodd;stroke:#0000FF;stroke-width:2.0px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1' />
  <path class='bond-6 atom-6 atom-7' d='M 186.8,92.0 L 195.8,100.2' style='fill:none;fill-rule:evenodd;stroke:#000000;stroke-width:2.0px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1' />
  <path class='bond-7 atom-7 atom-8' d='M 211.0,106.2 L 219.5,114.0' style='fill:none;fill-rule:evenodd;stroke:#000000;stroke-width:2.0px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1' />
  <path class='bond-7 atom-7 atom-8' d='M 219.5,114.0 L 227.9,121.9' style='fill:none;fill-rule:evenodd;stroke:#FF0000;stroke-width:2.0px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1' />
  <path class='bond-7 atom-7 atom-8' d='M 207.0,110.6 L 215.5,118.4' style='fill:none;fill-rule:evenodd;stroke:#000000;stroke-width:2.0px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1' />
  <path class='bond-7 atom-7 atom-8' d='M 215.5,118.4 L 223.9,126.2' style='fill:none;fill-rule:evenodd;stroke:#FF0000;stroke-width:2.0px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1' />
  <path class='bond-8 atom-2 atom-9' d='M 61.4,111.8 L 44.4,117.1' style='fill:none;fill-rule:evenodd;stroke:#000000;stroke-width:2.0px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1' />
  <path class='bond-8 atom-2 atom-9' d='M 44.4,117.1 L 27.4,122.4' style='fill:none;fill-rule:evenodd;stroke:#7F4C19;stroke-width:2.0px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1' />
  <path class='bond-9 atom-5 atom-0' d='M 136.7,88.2 L 128.1,126.7' style='fill:none;fill-rule:evenodd;stroke:#000000;stroke-width:2.0px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1' />
  <path d='M 126.2,127.3 L 128.1,126.7 L 128.5,124.8' style='fill:none;stroke:#000000;stroke-width:2.0px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1;' />
  <path d='M 92.3,137.9 L 90.4,138.5 L 89.0,137.1' style='fill:none;stroke:#000000;stroke-width:2.0px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1;' />
  <path d='M 69.6,75.2 L 70.1,73.3 L 71.9,72.7' style='fill:none;stroke:#000000;stroke-width:2.0px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1;' />
  <path d='M 105.8,62.1 L 107.7,61.5 L 109.2,62.9' style='fill:none;stroke:#000000;stroke-width:2.0px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1;' />
  <path class='atom-6' d='M 171.9 70.9
  L 175.6 76.8
  Q 175.9 77.4, 176.5 78.5
  Q 177.1 79.5, 177.1 79.6
  L 177.1 70.9
  L 178.6 70.9
  L 178.6 82.1
  L 177.1 82.1
  L 173.1 75.6
  Q 172.7 74.8, 172.2 74.0
  Q 171.7 73.1, 171.6 72.8
  L 171.6 82.1
  L 170.1 82.1
  L 170.1 70.9
  L 171.9 70.9
  ' fill='#0000FF'/>
  <path class='atom-7' d='M 199.1 103.3
  Q 199.1 100.5, 200.4 99.0
  Q 201.7 97.6, 204.1 97.6
  Q 206.4 97.6, 207.7 99.2
  L 206.6 100.0
  Q 205.7 98.9, 204.1 98.9
  Q 202.5 98.9, 201.6 100.0
  Q 200.7 101.1, 200.7 103.3
  Q 200.7 105.5, 201.6 106.6
  Q 202.5 107.7, 204.3 107.7
  Q 205.5 107.7, 207.0 107.0
  L 207.4 108.2
  Q 206.8 108.6, 206.0 108.8
  Q 205.1 109.0, 204.1 109.0
  Q 201.7 109.0, 200.4 107.5
  Q 199.1 106.0, 199.1 103.3
  ' fill='#000000'/>
  <path class='atom-8' d='M 227.2 130.0
  Q 227.2 127.3, 228.6 125.8
  Q 229.9 124.3, 232.4 124.3
  Q 234.8 124.3, 236.2 125.8
  Q 237.5 127.3, 237.5 130.0
  Q 237.5 132.7, 236.2 134.2
  Q 234.8 135.8, 232.4 135.8
  Q 229.9 135.8, 228.6 134.2
  Q 227.2 132.7, 227.2 130.0
  M 232.4 134.5
  Q 234.1 134.5, 235.0 133.4
  Q 235.9 132.2, 235.9 130.0
  Q 235.9 127.8, 235.0 126.7
  Q 234.1 125.6, 232.4 125.6
  Q 230.7 125.6, 229.7 126.7
  Q 228.8 127.8, 228.8 130.0
  Q 228.8 132.2, 229.7 133.4
  Q 230.7 134.5, 232.4 134.5
  ' fill='#FF0000'/>
  <path class='atom-9' d='M 17.9 123.2
  Q 19.0 123.5, 19.5 124.2
  Q 20.1 124.8, 20.1 125.8
  Q 20.1 127.3, 19.1 128.2
  Q 18.1 129.1, 16.3 129.1
  L 12.5 129.1
  L 12.5 117.9
  L 15.8 117.9
  Q 17.7 117.9, 18.7 118.7
  Q 19.6 119.5, 19.6 120.9
  Q 19.6 122.6, 17.9 123.2
  M 14.0 119.2
  L 14.0 122.7
  L 15.8 122.7
  Q 16.9 122.7, 17.5 122.2
  Q 18.1 121.8, 18.1 120.9
  Q 18.1 119.2, 15.8 119.2
  L 14.0 119.2
  M 16.3 127.8
  Q 17.3 127.8, 17.9 127.3
  Q 18.5 126.8, 18.5 125.8
  Q 18.5 124.9, 17.9 124.4
  Q 17.2 124.0, 16.0 124.0
  L 14.0 124.0
  L 14.0 127.8
  L 16.3 127.8
  ' fill='#7F4C19'/>
  <path class='atom-9' d='M 22.6 121.0
  L 22.8 122.1
  Q 23.7 120.8, 25.0 120.8
  Q 25.5 120.8, 26.1 121.0
  L 25.8 122.3
  Q 25.2 122.2, 24.8 122.2
  Q 24.1 122.2, 23.7 122.4
  Q 23.3 122.7, 22.9 123.3
  L 22.9 129.1
  L 21.4 129.1
  L 21.4 121.0
  L 22.6 121.0
  ' fill='#7F4C19'/>
  </svg>`;
};

async function getBrowser() {
  return puppeteer.launch({
    args: [...chromium.args, "--no-sandbox", "--incognito", "--hide-scrollbars", "--disable-web-security"],
    defaultViewport: chromium.defaultViewport,
    executablePath: await chromium.executablePath(`https://github.com/Sparticuz/chromium/releases/download/v131.0.0/chromium-v131.0.0-pack.tar`),
    headless: chromium.headless,
    ignoreDefaultArgs: ["--disable-extensions"]
  });
}
const testHTML = () => {
  const svg = getSvg();
  return `<!DOCTYPE html>
          <html lang="en">
          <head>
              <meta charset="UTF-8">
              <meta name="viewport" content="width=device-width, initial-scale=1.0">
              <title>PDF Template</title>
              <style>
                  body {
                      font-family: Arial, sans-serif;
                      margin: 0;
                      padding: 20px;
                  }
                  header, footer {
                      text-align: center;
                      padding: 10px;
                      background-color: #f1f1f1;
                  }
                  main {
                      margin: 20px 0;
                  }
              </style>
          </head>
          <body>
              <header>
                  <h1>PDF Header</h1>
              </header>
              <main>
                  <h2>Content Title</h2>
                  <p>This is a sample content for the PDF document. You can customize this template as needed.</p>
                  ${svg}
              </main>
              <footer>
                  <p>PDF Footer</p>
              </footer>
          </body>
          </html>`;
};

export const getPdf = async () => {
  // Start headless chrome instance
  const browser = await getBrowser();
  const page = await browser.newPage();
  const html = testHTML();
  await page.setContent(html, { waitUntil: "networkidle0" });

  // Tell Chrome to generate the PDF
  const pdfBuffer = await page.pdf({
    format: "A4",
    printBackground: true,
    margin: { top: "1cm", right: "1cm", bottom: "1cm", left: "1cm" }
  });

  // Close chrome instance
  await browser.close();
  return pdfBuffer;
};
