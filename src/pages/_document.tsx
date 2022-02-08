import React, { ReactElement } from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render(): ReactElement {
    return (
      <Html className="scroll-smooth w-full box-border">
        <Head>
          <script
            dangerouslySetInnerHTML={{
              __html: `(function(h,o,t,j,a,r){
                          h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
                          h._hjSettings={hjid:2821702,hjsv:6};
                          a=o.getElementsByTagName('head')[0];
                          r=o.createElement('script');r.async=1;
                          r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
                          a.appendChild(r);
                        })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');`,
            }}
          />
        </Head>
        <body className="bg-white dark:bg-slate-900 font-mono">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
