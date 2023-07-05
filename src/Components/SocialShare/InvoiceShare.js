import { toPng } from "html-to-image";
import React, { useEffect, useState } from "react";
import {
  EmailShareButton,
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  FacebookShareCount,
  FacebookIcon,
  TwitterIcon,
  WhatsappIcon,
  EmailIcon,
  LinkedinIcon,
} from "react-share";

const title = "Pause a Moment to Breathe";
const image =
  "https://storage.googleapis.com/pam-images/thumbnail/3d5f006c-dcc1-4bd4-99a9-e3adda6fda42.png";

const shareUrl =
  "https://pam-dev.med.stanford.edu/flexiblethinking/b34f4624-2e61-4891-bf3e-cc76ac37a22b";
// const shareUrl = "https://www.differenzsystem.com/";
const quote =
  "Pause a  moment to breathe. This practice will help you self-soothe by anchoring you to your breath. Retraining your breath can reduce physical sensations of anxiety. By slowing down your breath, you take in less oxygen and your nervous system also catches a break. Taking time to breathe has also been shown to improve focus and expand your awareness.";

const InvoiceShare = () => {
  const [currentURL, setCurrentURL] = useState(null);

  const [invoiceImageUrl, setInvoiceImageUrl] = useState("");
  useEffect(() => {
    let temp = document.getElementById("invoice_card");
    toPng(temp, { cacheBust: true }).then(async (dataUrl) => {
      setInvoiceImageUrl(dataUrl);
    });
  }, []);

  useEffect(function () {
    async function assignURL() {
      let temp = document.getElementById("invoice_card");
      return new Promise(function (resolve, reject) {
        if (typeof window === undefined) reject(`SOMETHING_WENT_WRONG`);
        resolve(setCurrentURL(encodeURI(temp)));
      });
    }

    assignURL();
  }, []);

  return (
    <div className="App">
      {/* <FacebookShareButton
        url={shareUrl}
        quote={`Try this tool from PAM : ${title}\n\n${quote}`}
      >
        <FacebookIcon size={32} round />
      </FacebookShareButton>

      <div>
        <FacebookShareCount url={shareUrl}>
          {(count) => count}
        </FacebookShareCount>
      </div>

      <div>
        <TwitterShareButton
          url={shareUrl}
          title={`Try this tool from PAM : ${title}\n\n${quote}`}
        >
          <TwitterIcon size={32} round />
        </TwitterShareButton>
      </div> */}

      <div>
        <WhatsappShareButton
          url={invoiceImageUrl}
          // title={`Try this tool from PAM : ${title}\n\n${quote}`}
          // separator="\r\n\r\n"
          imageURL={invoiceImageUrl}
          media={invoiceImageUrl}
        >
          <WhatsappIcon size={32} round />
        </WhatsappShareButton>
      </div>

      {/* <div>
        <EmailShareButton subject={title}>
          <EmailIcon size={32} round />
        </EmailShareButton>
      </div>

      <div>
        <LinkedinShareButton
          url={shareUrl}
          title={`Try this tool from PAM : ${title}`}
          summary={quote}
        >
          <LinkedinIcon size={32} round />
        </LinkedinShareButton>
      </div> */}
    </div>
  );
};

export default InvoiceShare;
