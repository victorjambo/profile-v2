import React, { ReactElement } from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render(): ReactElement {
    return (
      <Html className="scroll-smooth w-full box-border">
        <Head />
        <body className="bg-white dark:bg-slate-900 font-mono">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
