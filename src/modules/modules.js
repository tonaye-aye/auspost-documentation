const modules = [
  {
    id: 1,
    name: `baseModule`,
    type: `starter`,
    path: `/get-started/base`,
    data: {
      heading: `Base`,
      tag: `Use the base HTML to start your project`,
      instructions: `This code snippet has no visual since it is just a wrapper. Copy the code and paste it into a text editor to get started.`,
      preview: false,
      html: `<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
    <html
      xmlns="http://www.w3.org/1999/xhtml"
      xmlns:v="urn:schemas-microsoft-com:vml"
      xmlns:o="urn:schemas-microsoft-com:office:office"
    >
      <head>
        <title></title>
        <meta http-equiv="content-type" content="text/html; charset=iso-8859-1" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />

        <style type="text/css">
          body,
          table,
          td,
          a {
            -webkit-text-size-adjust: 100%;
            -ms-text-size-adjust: 100%;
          }

          /* prevent iOS font upsizing */
          .ExternalClass * {
            line-height: 100%;
          }

          /* force Outlook.com to honor line-height */
          table,
          td {
            mso-table-lspace: 0pt;
            mso-table-rspace: 0pt;
          }

          table th {
            border: 0px;
            padding: 0px;
            margin: 0px;
          }

          /* Remove spacing between tables in Outlook 2007 and up */
          img {
            -ms-interpolation-mode: bicubic;
          }

          /* RESET STYLES */
          img {
            border: 0;
            height: auto;
            line-height: 100%;
            outline: none;
            text-decoration: none;
          }

          table {
            border-collapse: collapse !important;
          }

          /* iOS BLUE LINKS */

          a[x-apple-data-detectors] {
            color: inherit !important;
            text-decoration: none !important;
            font-size: inherit !important;
            font-family: inherit !important;
            font-weight: inherit !important;
            line-height: inherit !important;
          }

          /* ANDROID CENTER FIX */

          div[style*='margin: 16px 0;'] {
            margin: 0 !important;
          }

          /* SUPERSCRIPT */

          sup {
            font-size: 66%;
            line-height: 1;
            vertical-align: top;
            mso-text-raise: 30%;
          }

          /* Responsive CSS */
          @media only screen and (max-width: 540px) {
            .section-heading-mobile-C {
              width: 100% !important;
              height: auto !important;
              margin: 0 auto !important;
            }
          }

          @media only screen and (max-width: 480px) {
            /*** LAYOUT ***/
            body {
              width: 100%;
              min-width: 100%;
              position: relative;
              top: 0;
              left: 0;
              right: 0;
              margin: 0;
              padding: 0;
            }
            .margin-fix {
              position: relative;
              top: 0;
              left: 0;
              right: 0;
            }

            /*** LOGO ***/
            .mobile-logo {
              width: 75% !important;
              height: auto !important;
            }

            /*** MOBILE HIDE ***/
            .mobile-hide {
              width: 0px !important;
              height: 0px !important;
              display: none !important;
            }

            /*** IMG 80% ***/
            .img-50 {
              width: 50% !important;
              height: auto !important;
              min-width: 50% !important;
            }

            /*** IMG 100% ***/
            .img-100 {
              width: 100% !important;
              height: auto !important;
              min-width: 100% !important;
            }

            /*** WIDTH 100% ***/
            .width-100,
            .width-100-margin-10,
            .width-100-margin-20,
            .width-100-margin-24 {
              width: 100% !important;
              min-width: 100% !important;
            }
            .width-100-margin-10 {
              margin: 10px 0 0 0 !important;
            }
            .width-100-margin-20 {
              margin: 20px 0 0 0 !important;
            }
            .width-100-margin-24 {
              margin-top: 24px !important;
            }

            /*** PADDING STYLING ***/

            /* Top Padding */
            .padding-top-15 {
              padding: 15px 0 0 0 !important;
            }

            /* Bottom Padding */
            .padding-bottom-15 {
              padding: 0 0 15px 0 !important;
            }

            /* All Padding */
            .padding-15 {
              padding: 15px !important;
            }

            .padding-0-15-15 {
              padding: 0 15px 15px !important;
            }

            .padding-10-30-10 {
              padding: 10px 15px 15px 15px !important;
            }

            .padding-10-5 {
              padding: 10px 5px !important;
            }

            .padding-20 {
              padding: 20px !important;
            }

            .padding-30 {
              padding: 30px !important;
            }

            .padding-30-15 {
              padding: 30px 15px !important;
            }

            .padding-30-15-0 {
              padding: 30px 15px 0 !important;
            }

            .padding-45-15 {
              padding: 45px 15px !important;
            }

            .padding-45-30 {
              padding: 45px 30px !important;
            }

            .padding-10-center {
              padding: 15px !important;
              text-align: center !important;
            }

            .padding-10-25-25-25 {
              padding: 10px 25px 25px 25px !important;
            }

            .padding-45-0-0-0 {
              padding: 45px 0 0 0 !important;
            }

            .padding-bot-25 {
              padding: 0 0 25px 0 !important;
            }

            .padding-30-font-24 {
              padding: 30px !important;
              font-size: 24px !important;
              line-height: 28px !important;
            }

            /* No Padding */
            .padding-none {
              padding: 0 !important;
            }

            /*** FOOTER ***/
            .footer-image img {
              padding-left: 0px !important;
              margin: 10px !important;
            }

            /*** DISCLAIMER ***/
            .disclaimer-align {
              text-align: left !important;
            }
            .disclaimer-link {
              display: block !important;
              padding: 5px 0 !important;
            }

            /* FONTS */
            .font-22-line-22 {
              font-size: 22px !important;
              line-height: 22px !important;
            }

            .font-24 {
              font-size: 24px !important;
              line-height: 28px !important;
              text-align: center !important;
            }

            .font-30 {
              font-size: 24px !important;
              line-height: 28px !important;
            }

            .font-30-padding {
              font-size: 24px !important;
              line-height: 28px !important;
              padding: 0 0 30px 0 !important;
            }

            .font-19,
            .font-19B {
              font-size: 17px !important;
              line-height: 30px !important;
              padding: 0 10px !important;
            }

            .font-19B {
              padding: 3px 0 0 0 !important;
            }

            .text-align-right {
              text-align: right !important;
            }

            .img-center img {
              margin: 0 auto !important;
            }

            .show {
              display: block !important;
              margin: 0 !important;
              padding: 0 !important;
              overflow: visible !important;
              width: 100% !important;
              max-height: inherit !important;
            }

            .drop {
              width: 100% !important;
              float: left !important;
            }

            .padding-currency1 {
              padding: 0 0 25px 0;
            }

            .padding-currency2 {
              padding: 0 0 25px 8px;
            }

            .bg-white {
              background-color: #ffffff !important;
            }
          }
        </style>

        <!--[if gte mso 9]>
          <style>
            body,
            table,
            td {
              font-family: Arial, Helvetica, sans-serif !important;
            } /* prevents Outlook from defaulting to Times New Roman */
            table td {
              border-collapse: collapse;
            }
          </style>
        <![endif]-->

        <!-- DPI FIX (120DPI) -->

        <!--[if gte mso 9]>
          <xml>
            <o:OfficeDocumentSettings>
              <o:AllowPNG />
              <o:PixelsPerInch>96</o:PixelsPerInch>
            </o:OfficeDocumentSettings>
          </xml>
        <![endif]-->

        <!-- /DPI FIX (120DPI) -->
      </head>

      <body style="margin: 0px; padding: 0px">
        <img src="http://link.prepaid1.mastercard.com/1x1.dyn" width="1" height="1" border="0" />
        <table
          cellpadding="0"
          cellspacing="0"
          border="0"
          width="100%"
          class="margin-fix"
          bgcolor="#E5E5E5"
        >
          <tr>
            <td align="center" bgcolor="#E5E5E5">
              <div
                style="
                  display: none;
                  font-size: 1px;
                  color: #212129;
                  line-height: 1px;
                  font-family: Arial, Helvetica, sans-serif;
                  max-height: 0px;
                  max-width: 0px;
                  opacity: 0;
                  overflow: hidden;
                  mso-hide: all;
                "
              ></div>

              <!-- CONTAINER -->
              <table cellpadding="0" cellspacing="0" border="0" width="640" class="width-100">
                <tr>
                  <td width="640" align="center" style="min-width: 640px" class="width-100">
                    <!------------------------------>
                    <!-- INSERT CORE MODULES HERE -->
                    <!------------------------------>
                  </td>
                </tr>
              </table>
              <!-- /CONTAINER -->
            </td>
          </tr>
        </table>
      </body>
    </html>`
    }
  },
  {
    id: 2,
    name: `headerModule`,
    type: `core`,
    path: `/core/header`,
    data: {
      heading: `Header`,
      tag: `After the base HTML is set up, we can add modules`,
      instructions: `You will see a container block and inside the following comments: <!-- INSERT CORE MODULES HERE -->. Feel free to remove this comment and replace it with the code below.`,
      preview: true,
      html: `<!-- HEADER -->
  <table cellpadding="0" cellspacing="0" border="0" width="100%" bgcolor="#ffffff">
  <tr>
      <td align="left" valign="top" style="padding: 20px 30px" class="padding-15">
      <table cellpadding="0" cellspacing="0" border="0" width="100%">
          <tr valign="middle">
          <td align="left">
              <a href="https://auspost.com.au" target="_blank" style="color: #212129" name="Logo">
              <img
                  src="https://cdn.pinpoint.net.au/product/auspost-logo-2020-v2.png"
                  width="150"
                  heifht="auto"
                  border="0"
                  style="display: block"
                  alt="Australia Post"
                  class="img-50"
              />
              </a>
          </td>
          <td
              align="right"
              style="
              color: #6d6d72;
              font-family: Arial, sans-serif;
              font-size: 10px;
              letter-spacing: 0;
              line-height: 12px;
              "
          >
              <a href="@HTML_PREVIEW_LINK" style="text-decoration: underline; color: #6d6d72"
              >VIEW ONLINE</a
              >
          </td>
          </tr>
      </table>
      </td>
  </tr>
  </table>
  <table cellpadding="0" cellspacing="0" border="0" width="100%">
  <tr>
      <td>
      <img
          src="https://cdn.pinpoint.net.au/product/auspost-reload-banner-2021.jpg"
          width="640"
          height="auto"
          border="0"
          style="display: block"
          alt=""
          class="img-100"
      />
      </td>
  </tr>
  </table>
  <!-- /HEADER -->`
    }
  },
  {
    id: 3,
    name: `introModule`,
    type: `core`,
    path: `/core/introduction`,
    data: {
      heading: `Introduction`,
      tag: `Place the Introduction module right after the Header module`,
      instructions: `This code block goes right after the Header module, all core modules are placed one-after-another.`,
      preview: true,
      html: `<!-- INTRODUCTION -->
  <table cellpadding="0" cellspacing="0" border="0" width="100%" bgcolor="#f5f5f5">
    <tr>
      <td align="left" valign="top" style="padding: 40px 30px 30px 30px">
        <table cellpadding="0" cellspacing="0" border="0" width="100%">
          <tr valign="top">
            <td width="5" bgcolor="#dc1928" class="mobile-hide">&nbsp;</td>
            <td width="20" class="mobile-hide">&nbsp;</td>
            <td align="left" style="font-family: Arial, sans-serif; font-size: 20px; color: #212129">
              <table cellpadding="0" cellspacing="0" border="0" width="100%">
                <tr>
                  <td style="padding: 0 0 20px 0">
                    <a
                      href="https://auspost.com.au/money-insurance/prepaid-cards/everyday-mastercard#tab1"
                      target="_blank"
                      style="color: #212129"
                      name="Card"
                    >
                      <img
                        src="https://cdn.pinpoint.net.au/product/auspost-cardart.png"
                        width="95"
                        border="0"
                        style="display: block"
                        alt="Everyday Mastercard"
                      />
                    </a>
                  </td>
                </tr>
                <tr>
                  <td
                    style="
                      font-family: Arial, sans-serif;
                      color: #212129;
                      font-size: 40px;
                      letter-spacing: 0;
                      line-height: 44px;
                      padding: 0 0 25px 0;
                    "
                    class="font-30"
                    align="left"
                  >
                    Top up and shop
                  </td>
                </tr>
                <tr>
                  <td
                    style="
                      font-family: Arial, sans-serif;
                      color: #4d4d54;
                      font-size: 16px;
                      letter-spacing: 0;
                      line-height: 24px;
                      padding: 0 0 35px 0;
                    "
                    align="left"
                  >
                    Reload your Everyday Mastercard<sup>®</sup> so you're ready to go, whether it's
                    online shopping, paying bills or anything in between.
                  </td>
                </tr>
                <tr>
                  <td
                    style="
                      font-family: Arial, sans-serif;
                      font-size: 20px;
                      color: #212129;
                      padding: 0 0 15px 0;
                    "
                  >
                    <div>
                      <!--[if mso]>
                        <v:roundrect
                          xmlns:v="urn:schemas-microsoft-com:vml"
                          xmlns:w="urn:schemas-microsoft-com:office:word"
                          href="https://everyday.card.auspost/login"
                          style="height:45px;v-text-anchor:middle;width:145px;"
                          arcsize="14%"
                          stroke="f"
                          fillcolor="#dc1928">
                        <w:anchorlock/>
                        <center>
                      <![endif]-->
                      <a
                        href="https://everyday.card.auspost/login"
                        style="
                          background-color: #dc1928;
                          border-radius: 6px;
                          color: #ffffff;
                          display: inline-block;
                          font-family: sans-serif;
                          font-size: 15px;
                          line-height: 45px;
                          text-align: center;
                          text-decoration: none;
                          width: 145px;
                          -webkit-text-size-adjust: none;
                        "
                        class="width-100"
                        >Load now</a
                      >
                      <!--[if mso]>
                        </center>
                        </v:roundrect>
                      <![endif]-->
                    </div>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
  <!-- /INTRODUCTION -->
  `
    }
  },
  {
    id: 4,
    name: `bodyModule`,
    type: `core`,
    path: `/core/body`,
    data: {
      heading: `Body`,
      tag: `The body module will contain the non-core modules`,
      instructions: `This code snippet has no visual since it is just a wrapper. Place the block of code below right after the Introduction module, and before the Footer module. Place all Full-Width, 2-Column and Other modules within the Body module.`,
      preview: false,
      html: `<!-- EMAIL BODY -->
  <table cellpadding="0" cellspacing="0" border="0" width="100%" bgcolor="#ffffff"
  >
      <tr>
        <td style="padding: 30px" class="padding-none">
          <!------------------------------>
          <!---- - INSERT - -------------->
          <!---- FULL-WIDTH MODULES   ---->
          <!---- 2-COLUMN MODULES     ---->
          <!---- OTHER MODULES        ---->
          <!---- -  HERE  - -------------->
          <!------------------------------>
        </td>
      </tr>
  </table>
  <!-- /EMAIL BODY -->`
    }
  },
  {
    id: 5,
    name: `footerModule`,
    type: `core`,
    path: `/core/footer`,
    data: {
      heading: `Footer`,
      tag: `The Footer is the final core module to be added`,
      instructions: ` Place the Footer module right after the Body module. Additional modules can now be added inside the Body Module.`,
      preview: true,
      html: `<!-- FOOTER -->
<table cellpadding="0" cellspacing="0" border="0" width="100%" bgcolor="#F5F5F5">
<tr>
    <td style="font-family: Arial, sans-serif; font-size: 12px; color: #76767b; padding: 30px">
    <table border="0" cellpadding="0" cellspacing="0" width="100%" bgcolor="#eeeeee">
        <tr>
        <td width="15" style="width: 15px">
            <img
            src="https://cdn.pinpoint.net.au/product/security-top-left.png"
            width="15"
            height="auto"
            border="0"
            style="display: block; width: 15px"
            alt=""
            />
        </td>
        <td>&nbsp;</td>
        <td width="15" style="width: 15px">
            <img
            src="https://cdn.pinpoint.net.au/product/security-top-right.png"
            width="15"
            height="auto"
            border="0"
            style="display: block; width: 15px"
            alt=""
            />
        </td>
        </tr>

        <tr>
        <td width="15" style="width: 15px">&nbsp;</td>
        <td>
            <table border="0" cellpadding="0" cellspacing="0" width="100%">
            <tr valign="middle">
                <td>
                <img
                    src="https://cdn.pinpoint.net.au/product/security-footer.png"
                    width="51"
                    height="42"
                    border="0"
                    style="display: block; width: 51px"
                    alt=""
                />
                </td>
                <td width="15" style="width: 15px">&nbsp;</td>
                <td
                valign="middle"
                style="
                    color: #4d4d54;
                    font-family: Arial, sans-serif;
                    font-size: 12px;
                    letter-spacing: 0;
                    line-height: 16px;
                "
                >
                Australia Post will never send you an email asking for your password, credit card
                details or account information.
                </td>
            </tr>
            </table>
        </td>
        <td width="15" style="width: 15px">&nbsp;</td>
        </tr>
        <tr>
        <td width="15" style="width: 15px">
            <img
            src="https://cdn.pinpoint.net.au/product/security-top-left.png"
            width="15"
            height="auto"
            border="0"
            style="display: block; width: 15px"
            alt=""
            />
        </td>
        <td>&nbsp;</td>
        <td width="15" style="width: 15px">
            <img
            src="https://cdn.pinpoint.net.au/product/security-top-right.png"
            width="15"
            height="auto"
            border="0"
            style="display: block; width: 15px"
            alt=""
            />
        </td>
        </tr>
    </table>
    <br /><br />
    <table border="0" cellpadding="0" cellspacing="0" width="100%" bgcolor="#e2e2e2">
        <tr>
        <td height="1" style="line-height: 1px; height: 1px; font-size: 0px">
            <img
            border="0"
            src="http://images.pinpoint.net.au/product/wl_space.gif"
            width="1"
            height="1"
            alt=""
            style="display: block"
            />
        </td>
        </tr>
    </table>
    <br /><br />
    <table border="0" cellpadding="0" cellspacing="0" width="100%">
        <tr>
        <td width="24" style="width: 24px">
            <img
            src="https://cdn.pinpoint.net.au/product/auspost-icon-logo.png"
            width="24"
            height="auto"
            border="0"
            style="display: block"
            alt=""
            />
        </td>
        <td
            style="
            color: #4d4d54;
            font-family: Arial, sans-serif;
            font-size: 12px;
            letter-spacing: 0;
            line-height: 16px;
            text-align: right;
            "
        >
            Connect with Australia Post
        </td>
        <td width="8" style="width: 8px"></td>
        <td width="32" style="width: 32px">
            <a href="https://www.instagram.com/auspost/" target="_blank">
            <img
                src="https://cdn.pinpoint.net.au/product/auspost-instagram.png"
                width="32"
                height="auto"
                border="0"
                style="display: block"
                alt=""
            />
            </a>
        </td>
        <td width="8" style="width: 8px"></td>
        <td width="32" style="width: 32px">
            <a href="https://www.facebook.com/australiapost/" target="_blank">
            <img
                src="https://cdn.pinpoint.net.au/product/auspost-facebook.png"
                width="32"
                height="auto"
                border="0"
                style="display: block"
                alt=""
            />
            </a>
        </td>
        </tr>
    </table>
    &nbsp;<br />
    1. Further information relating to Zero Liability Card Protection can be found at the
    <a
        href="https://auspost.com.au/money-insurance/prepaid-cards/everyday-mastercard#tab4"
        target="_blank"
        style="color: #76767b; text-decoration: underline"
    >
        Mastercard website </a
    >. <br /><br />
    2. Other fees may apply. For full terms and conditions, please refer to the
    <a
        href="https://auspost.com.au/content/dam/auspost_corp/media/documents/australia-post-everyday-mastercard-product-disclosure-statement.pdf"
        target="_blank"
        style="color: #76767b; text-decoration: underline"
    >
        Product Disclosure Statement </a
    >. <br /><br />
    3. Lock in your exchange rates means the exchange rate is locked in for the initial load only.
    The exchange rates for subsequent reloads will be set at the prevailing exchange rate at the
    time of the transaction.
    <br /><br />
    Mastercard Prepaid Management Services Australia Pty Ltd (ABN 47 145 452 044, AFSL 386837)
    arranges for the issue of the Australia Post Everyday Mastercard in conjunction with the
    issuer, Heritage Bank Limited (ABN 32 087 652 024, AFSL 240984). Australian Postal Corporation
    (ABN 28 864 970 579, AR No. 338646), the card distributor, acts as an Authorised
    Representative of Australia Post Services Pty Ltd (ABN 67 002 599 340, AFSL 457551). You
    should consider the Australia Post Everyday Mastercard
    <a
        href="https://auspost.com.au/content/dam/auspost_corp/media/documents/australia-post-everyday-mastercard-product-disclosure-statement.pdf"
        target="_blank"
        style="color: #76767b; text-decoration: underline"
        >Product Disclosure Statement</a
    >
    and
    <a
        href="https://auspost.com.au/content/dam/auspost_corp/media/documents/australia-post-everyday-mastercard-financial-services-guide.pdf"
        target="_blank"
        style="color: #76767b; text-decoration: underline"
        >Financial Services Guide (PDF 180kB)</a
    >
    before deciding to acquire the product. Any advice does not take into account your personal
    needs, financial circumstances or objectives and you should consider if it is appropriate for
    you. Mastercard and Priceless are registered trademarks, and the circles design is a trademark
    of Mastercard International Incorporated.
    <br /><br />
    If you don't wish to receive future emails from us about the Everyday Mastercard please
    <a
        href="http://mastercard.auspost.com.au/Unsubscribe_Auspost.html"
        target="_blank"
        style="text-decoration: underline; color: #76767b"
        >unsubscribe</a
    >. <br /><br /><br />
    <a
        href="https://auspost.com.au/money-insurance/prepaid-cards/everyday-mastercard"
        target="_blank"
        style="color: #76767b; text-decoration: none; font-weight: bold"
    >
        Terms and Conditions
    </a>
    &nbsp;&nbsp;&nbsp;&nbsp;<a
        href="https://auspost.com.au/money-insurance/prepaid-cards/everyday-mastercard#tab4"
        target="_blank"
        style="color: #76767b; text-decoration: none; font-weight: bold"
    >
        Help & Support
    </a>
    &nbsp;&nbsp;&nbsp;&nbsp;
    <a
        href="https://auspost.com.au/privacy"
        target="_blank"
        style="color: #76767b; text-decoration: none; font-weight: bold"
    >
        Privacy Policy
    </a>
    &nbsp;&nbsp;&nbsp;&nbsp;
    <a
        href="http://mastercard.auspost.com.au/Unsubscribe_Auspost.html"
        target="_blank"
        style="color: #76767b; text-decoration: none; font-weight: bold"
    >
        Unsubscribe
    </a>
    <br /><br /><br />
    <table border="0" cellpadding="0" cellspacing="0" width="100%" bgcolor="#4d4d54">
        <tr>
        <td height="1" style="line-height: 1px; height: 1px; font-size: 0px">
            <img
            border="0"
            src="http://images.pinpoint.net.au/product/wl_space.gif"
            width="1"
            height="1"
            alt=""
            style="display: block"
            />
        </td>
        </tr>
    </table>
    &nbsp;<br /><br />
    © 2020 Australia Post. All Rights Reserved.
    </td>
</tr>
</table>
<table border="0" cellpadding="0" cellspacing="0" width="100%" bgcolor="#31313D">
<tr>
    <td style="padding: 20px 30px" class="padding-15">
    <table border="0" cellpadding="0" cellspacing="0" width="100%">
        <tr>
        <td width="80" style="width: 80px">
            <img
            src="https://cdn.pinpoint.net.au/product/auspost-footer-icon.png"
            width="80"
            height="auto"
            border="0"
            style="display: block"
            alt=""
            />
        </td>
        <td width="15" style="width: 15px"></td>
        <td
            style="
            color: #ffffff;
            font-family: Arial, sans-serif;
            font-size: 11px;
            letter-spacing: 0;
            line-height: 14px;
            "
        >
            Australia Post acknowledges the Traditional Custodians of the land on which we operate,
            live and gather as employees, and recognise their continuing connection to land, water
            and community. We pay respect to Elders past, present and emerging.
        </td>
        </tr>
    </table>
    </td>
</tr>
</table>
<!-- /FOOTER -->`
    }
  },
  {
    id: 6,
    name: `fullWidthImage`,
    type: `fullwidth`,
    path: `/full-width/image`,
    data: {
      heading: `Full Width Image`,
      tag: `Now that the core modules are set up, we can add optional modules.`,
      instructions: `Place all optional modules inside of the body module. Use the comments in the code to seperate each block and know where they start and end.`,
      preview: true,
      html: `<!-- FULL WIDTH -->
<table cellpadding="0" cellspacing="0" border="0" width="100%">
  <tr>
    <td>
      <table
        border="0"
        bgcolor="#e2e2e2"
        cellpadding="1"
        cellspacing="0"
        width="100%"
      >
        <tr>
          <td>
            <table
              border="0"
              bgcolor="#ffffff"
              cellpadding="0"
              cellspacing="0"
              width="100%"
            >
              <tr>
                <td align="center">
                  <img
                    src="https://cdn.pinpoint.net.au/product/auspost-ecommerce-img-3.jpg"
                    width="578"
                    height="auto"
                    border="0"
                    style="display: block"
                    alt=""
                    class="img-100"
                  />
                </td>
              </tr>
              <tr>
                <td style="padding: 30px">
                  <table
                    border="0"
                    cellpadding="0"
                    cellspacing="0"
                    width="100%"
                  >
                    <tr>
                      <td
                        style="
                          color: #4d4d54;
                          font-family: Arial, sans-serif;
                          font-size: 20px;
                          font-weight: bold;
                          letter-spacing: 0;
                          line-height: 24px;
                          padding: 0 0 25px 0;
                        "
                      >
                        Mastercard Priceless<sup>®</sup>
                        Specials
                      </td>
                    </tr>
                    <tr>
                      <td
                        style="
                          font-family: Arial, sans-serif;
                          font-size: 16px;
                          color: #4d4d54;
                          line-height: 24px;
                          padding: 0 0 25px 0;
                        "
                      >
                        Your Everyday Mastercard gives you access to
                        Mastercard's Priceless Specials. These curated deals
                        span across shopping, sports, entertainment, art and
                        culture, travel and culinary industries.
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <table
                          cellpadding="0"
                          cellspacing="0"
                          border="0"
                          width="100%"
                        >
                          <tr>
                            <td width="8" style="width: 8px">
                              <img
                                src="https://cdn.pinpoint.net.au/product/auspost-arrow-red.png"
                                width="8"
                                height="auto"
                                border="0"
                                style="display: block"
                                alt=""
                              />
                            </td>
                            <td width="5" style="width: 5px">&nbsp;</td>
                            <td
                              style="
                                font-family: Arial, sans-serif;
                                font-size: 16px;
                                color: #4d4d54;
                                line-height: 24px;
                                font-weight: bold;
                              "
                            >
                              <a
                                href="https://specials.priceless.com/en-au/homepage"
                                style="text-decoration: none; color: #4d4d54"
                              >
                                Discover offers now
                              </a>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </td>
  </tr>
</table>
<!-- /FULL WIDTH -->`
    }
  },
  {
    id: 7,
    name: `fullWidthBullStandard`,
    type: `fullwidth`,
    path: `/full-width/bullets-standard`,
    data: {
      heading: `Bullets - Standard`,
      tag: `Now that the core modules are set up, we can add optional modules.`,
      instructions: `Place all optional modules inside of the body module. Use the comments in the code to seperate each block and know where they start and end.`,
      preview: true,
      html: `<!-- FULL WIDTH BULLETS -->
<table
  cellpadding="1"
  cellspacing="0"
  border="0"
  width="100%"
  bgcolor="#e2e2e2"
  class="bg-white"
>
  <tr>
    <td>
      <table
        cellpadding="0"
        cellspacing="0"
        border="0"
        width="100%"
        bgcolor="#ffffff"
      >
        <tr>
          <td style="padding: 30px">
            <table
              cellpadding="0"
              cellspacing="0"
              border="0"
              width="100%"
              bgcolor="#ffffff"
            >
              <tr>
                <td style="padding: 0 0 20px 0" class="padding-none">
                  <table
                    cellpadding="0"
                    cellspacing="0"
                    border="0"
                    width="100%"
                  >
                    <tr valign="top">
                      <td
                        align="left"
                        style="
                          font-family: Arial, sans-serif;
                          font-size: 28px;
                          color: #212129;
                          letter-spacing: 0;
                          line-height: 36px;
                          padding: 0 0 10px 0;
                        "
                        class="font-24"
                      >
                        Why reload and shop with your Everyday Mastercard?
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
              <tr>
                <td style="padding: 0 30px 45px 0" class="padding-30-15">
                  <table
                    cellpadding="0"
                    cellspacing="0"
                    border="0"
                    width="100%"
                  >
                    <tr valign="top">
                      <td style="padding: 0 0 25px 0">
                        <table
                          cellpadding="0"
                          cellspacing="0"
                          border="0"
                          width="100%"
                        >
                          <tr valign="top">
                            <td
                              width="20"
                              style="
                                font-family: Arial, sans-serif;
                                font-size: 16px;
                                color: #dc1928;
                                line-height: 24px;
                              "
                              align="center"
                              valign="top"
                            >
                              <img
                                src="https://cdn.pinpoint.net.au/product/auspost-shopping-bull1.jpg"
                                width="20"
                                height="auto"
                                border="0"
                                style="display: block"
                                alt=""
                              />
                            </td>
                            <td width="15">&nbsp;</td>
                            <td
                              align="left"
                              style="
                                font-family: Arial, sans-serif;
                                font-size: 16px;
                                color: #4d4d54;
                                line-height: 24px;
                              "
                              valign="top"
                            >
                              Shop with confidence - you can have peace of mind
                              knowing your card isn't linked to your bank
                              account and comes with Mastercard's Zero Liability
                              Protection<sup>2</sup>.
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                    <tr valign="top">
                      <td style="padding: 0 0 25px 0">
                        <table
                          cellpadding="0"
                          cellspacing="0"
                          border="0"
                          width="100%"
                        >
                          <tr valign="top">
                            <td
                              width="20"
                              style="
                                font-family: Arial, sans-serif;
                                font-size: 16px;
                                color: #dc1928;
                                line-height: 24px;
                              "
                              align="center"
                              valign="top"
                            >
                              <img
                                src="https://cdn.pinpoint.net.au/product/auspost-shopping-bull1.jpg"
                                width="20"
                                height="auto"
                                border="0"
                                style="display: block"
                                alt=""
                              />
                            </td>
                            <td width="15">&nbsp;</td>
                            <td
                              align="left"
                              style="
                                font-family: Arial, sans-serif;
                                font-size: 16px;
                                color: #4d4d54;
                                line-height: 24px;
                              "
                              valign="top"
                            >
                              A great budgeting tool - you can only spend what
                              you've deposited so it's a great way to help you
                              manage your money.
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                    <tr valign="top">
                      <td>
                        <table
                          cellpadding="0"
                          cellspacing="0"
                          border="0"
                          width="100%"
                        >
                          <tr valign="top">
                            <td
                              width="20"
                              style="
                                font-family: Arial, sans-serif;
                                font-size: 16px;
                                color: #dc1928;
                                line-height: 24px;
                              "
                              align="center"
                              valign="top"
                            >
                              <img
                                src="https://cdn.pinpoint.net.au/product/auspost-shopping-bull1.jpg"
                                width="20"
                                height="auto"
                                border="0"
                                style="display: block"
                                alt=""
                              />
                            </td>
                            <td width="15">&nbsp;</td>
                            <td
                              align="left"
                              style="
                                font-family: Arial, sans-serif;
                                font-size: 16px;
                                color: #4d4d54;
                                line-height: 24px;
                              "
                              valign="top"
                            >
                              Be a savvy shopper on international websites -
                              purchase foreign currency via
                              <a
                                href="https://everyday.card.auspost/login"
                                style="
                                  color: #dc1928;
                                  text-decoration: underline;
                                "
                                >My Account</a
                              >
                              or the
                              <a
                                href="https://auspost.com.au/money-insurance/prepaid-cards/everyday-mastercard"
                                style="
                                  color: #dc1928;
                                  text-decoration: underline;
                                "
                                >Everyday Mastercard App</a
                              >
                              so you know exactly what you're paying with locked
                              in exchange rates<sup>3</sup>.
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
              <tr>
                <td>
                  <div>
                    <!--[if mso]>
                      <v:roundrect
                        xmlns:v="urn:schemas-microsoft-com:vml"
                        xmlns:w="urn:schemas-microsoft-com:office:word"
                        href="https://everyday.card.auspost/login"
                        style="
                          height: 45px;
                          v-text-anchor: middle;
                          width: 145px;
                        "
                        arcsize="14%"
                        strokecolor="#dc1928"
                        fillcolor="#ffffff"
                      >
                        <w:anchorlock />
                        <center
                          style="
                            color: #dc1928;
                            font-family: sans-serif;
                            font-size: 13px;
                            font-weight: bold;
                          "
                        >
                          Load now
                        </center>
                      </v:roundrect> <!
                    [endif]--><a
                      href="https://everyday.card.auspost/login"
                      style="
                        background-color: #ffffff;
                        border: 1px solid #dc1928;
                        border-radius: 6px;
                        color: #dc1928;
                        display: inline-block;
                        font-family: sans-serif;
                        font-size: 15px;
                        font-weight: bold;
                        line-height: 45px;
                        text-align: center;
                        text-decoration: none;
                        width: 145px;
                        -webkit-text-size-adjust: none;
                        mso-hide: all;
                      "
                      class="width-100"
                      >Load now</a
                    >
                  </div>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </td>
  </tr>
</table>
<!-- /FULL WIDTH BULLETS -->`
    }
  },
  {
    id: 8,
    name: `fullWidthBullNavy`,
    type: `fullwidth`,
    path: `/full-width/navy`,
    data: {
      heading: `Bullets - Navy`,
      tag: `Now that the core modules are set up, we can add optional modules.`,
      instructions: `Place all optional modules inside of the body module. Use the comments in the code to seperate each block and know where they start and end.`,
      preview: true,
      html: `<!-- FULL WIDTH BULLETS NAVY-->
<table
  cellpadding="0"
  cellspacing="0"
  border="0"
  width="100%"
  bgcolor="#31313D"
>
  <tr>
    <td align="center" style="padding: 20px 0" class="padding-none">
      <table cellpadding="0" cellspacing="0" border="0" width="100%">
        <tr>
          <td style="padding: 30px">
            <table cellpadding="0" cellspacing="0" border="0" width="100%">
              <tr>
                <td
                  style="
                    font-family: Arial, sans-serif;
                    color: #ffffff;
                    font-size: 24px;
                    line-height: 34px;
                    padding: 0 0 30px 0;
                  "
                >
                  How to check your balance
                </td>
              </tr>
              <tr>
                <td
                  style="
                    font-family: Arial, sans-serif;
                    color: #ffffff;
                    font-size: 16px;
                    line-height: 22px;
                    padding: 0 0 50px 0;
                  "
                >
                  You can check your account balance anytime via
                  <a
                    href="https://everyday.card.auspost/login"
                    style="color: #ffffff; text-decoration: underline"
                    >My Account</a
                  >
                  or through the
                  <a
                    href="https://auspost.com.au/money-insurance/prepaid-cards/everyday-mastercard#tab1"
                    style="color: #ffffff; text-decoration: underline"
                    >Everyday Mastercard App</a
                  >. Just login and you'll see your available funds.
                </td>
              </tr>
              <tr>
                <td
                  style="
                    font-family: Arial, sans-serif;
                    color: #ffffff;
                    font-size: 20px;
                    font-weight: bold;
                    letter-spacing: 0;
                    line-height: 24px;
                    padding: 0 0 30px 0;
                  "
                >
                  While you're logged into My Account or the App, you can also:
                </td>
              </tr>
              <tr>
                <td>
                  <table
                    cellpadding="0"
                    cellspacing="0"
                    border="0"
                    width="100%"
                  >
                    <tr valign="top">
                      <td style="padding: 0 0 25px 0">
                        <table
                          cellpadding="0"
                          cellspacing="0"
                          border="0"
                          width="100%"
                        >
                          <tr valign="top">
                            <td
                              width="20"
                              style="
                                font-family: Arial, sans-serif;
                                font-size: 16px;
                                color: #dc1928;
                                line-height: 24px;
                              "
                              align="center"
                              valign="top"
                            >
                              <img
                                src="https://cdn.pinpoint.net.au/product/auspost-shopping-bull-charcoal.jpg"
                                width="20"
                                height="auto"
                                border="0"
                                style="display: block"
                                alt=""
                              />
                            </td>
                            <td width="15">&nbsp;</td>
                            <td
                              align="left"
                              style="
                                font-family: Arial, sans-serif;
                                font-size: 16px;
                                color: #ffffff;
                                line-height: 24px;
                              "
                              valign="top"
                            >
                              Track your transactions and spending.
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                    <tr valign="top">
                      <td style="padding: 0 0 25px 0">
                        <table
                          cellpadding="0"
                          cellspacing="0"
                          border="0"
                          width="100%"
                        >
                          <tr valign="top">
                            <td
                              width="20"
                              style="
                                font-family: Arial, sans-serif;
                                font-size: 16px;
                                color: #dc1928;
                                line-height: 24px;
                              "
                              align="center"
                              valign="top"
                            >
                              <img
                                src="https://cdn.pinpoint.net.au/product/auspost-shopping-bull-charcoal.jpg"
                                width="20"
                                height="auto"
                                border="0"
                                style="display: block"
                                alt=""
                              />
                            </td>
                            <td width="15">&nbsp;</td>
                            <td
                              align="left"
                              style="
                                font-family: Arial, sans-serif;
                                font-size: 16px;
                                color: #ffffff;
                                line-height: 24px;
                              "
                              valign="top"
                            >
                              Reload your card.
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                    <tr valign="top">
                      <td>
                        <table
                          cellpadding="0"
                          cellspacing="0"
                          border="0"
                          width="100%"
                        >
                          <tr valign="top">
                            <td
                              width="20"
                              style="
                                font-family: Arial, sans-serif;
                                font-size: 16px;
                                color: #dc1928;
                                line-height: 24px;
                              "
                              align="center"
                              valign="top"
                            >
                              <img
                                src="https://cdn.pinpoint.net.au/product/auspost-shopping-bull-charcoal.jpg"
                                width="20"
                                height="auto"
                                border="0"
                                style="display: block"
                                alt=""
                              />
                            </td>
                            <td width="15">&nbsp;</td>
                            <td
                              align="left"
                              style="
                                font-family: Arial, sans-serif;
                                font-size: 16px;
                                color: #ffffff;
                                line-height: 24px;
                              "
                              valign="top"
                            >
                              Manage your personal information and card details.
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </td>
  </tr>
</table>
<!-- /FULL WIDTH BULLETS NAVY-->`
    }
  },
  {
    id: 9,
    name: `fullWidthBullTeal`,
    type: `fullwidth`,
    path: `/full-width/teal`,
    data: {
      heading: `Bullets - Teal`,
      tag: `Now that the core modules are set up, we can add optional modules.`,
      instructions: `Place all optional modules inside of the body module. Use the comments in the code to seperate each block and know where they start and end.`,
      preview: true,
      html: `<!-- FULL WIDTH BULLETS TEAL -->
<table
  cellpadding="0"
  cellspacing="0"
  border="0"
  width="100%"
  bgcolor="#B8E8DE"
>
  <tr>
    <td align="center" style="padding: 20px 0" class="padding-none">
      <table cellpadding="0" cellspacing="0" border="0" width="100%">
        <tr>
          <td style="padding: 30px">
            <table cellpadding="0" cellspacing="0" border="0" width="100%">
              <tr>
                <td
                  style="
                    font-family: Arial, sans-serif;
                    color: #212129;
                    font-size: 24px;
                    line-height: 34px;
                    padding: 0 0 30px 0;
                  "
                >
                  How to check your balance
                </td>
              </tr>
              <tr>
                <td
                  style="
                    font-family: Arial, sans-serif;
                    color: #4d4d54;
                    font-size: 16px;
                    line-height: 22px;
                    padding: 0 0 50px 0;
                  "
                >
                  You can check your account balance anytime via
                  <a
                    href="https://everyday.card.auspost/login"
                    style="color: #dc1928; text-decoration: underline"
                    >My Account</a
                  >
                  or through the
                  <a
                    href="https://auspost.com.au/money-insurance/prepaid-cards/everyday-mastercard"
                    style="color: #dc1928; text-decoration: underline"
                    >Everyday Mastercard App</a
                  >. Just login and you'll see your available funds.
                </td>
              </tr>
              <tr>
                <td
                  style="
                    font-family: Arial, sans-serif;
                    color: #4d4d54;
                    font-size: 20px;
                    font-weight: bold;
                    letter-spacing: 0;
                    line-height: 24px;
                    padding: 0 0 30px 0;
                  "
                >
                  While you're logged into My Account or the App, you can also:
                </td>
              </tr>
              <tr>
                <td>
                  <table
                    cellpadding="0"
                    cellspacing="0"
                    border="0"
                    width="100%"
                  >
                    <tr valign="top">
                      <td style="padding: 0 0 25px 0">
                        <table
                          cellpadding="0"
                          cellspacing="0"
                          border="0"
                          width="100%"
                        >
                          <tr valign="top">
                            <td
                              width="20"
                              style="
                                font-family: Arial, sans-serif;
                                font-size: 16px;
                                color: #dc1928;
                                line-height: 24px;
                              "
                              align="center"
                              valign="top"
                            >
                              <img
                                src="https://cdn.pinpoint.net.au/product/auspost-shopping-bull-teal.jpg"
                                width="20"
                                height="auto"
                                border="0"
                                style="display: block"
                                alt=""
                              />
                            </td>
                            <td width="15">&nbsp;</td>
                            <td
                              align="left"
                              style="
                                font-family: Arial, sans-serif;
                                font-size: 16px;
                                color: #4d4d54;
                                line-height: 24px;
                              "
                              valign="top"
                            >
                              Track your transactions and spending.
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                    <tr valign="top">
                      <td style="padding: 0 0 25px 0">
                        <table
                          cellpadding="0"
                          cellspacing="0"
                          border="0"
                          width="100%"
                        >
                          <tr valign="top">
                            <td
                              width="20"
                              style="
                                font-family: Arial, sans-serif;
                                font-size: 16px;
                                color: #dc1928;
                                line-height: 24px;
                              "
                              align="center"
                              valign="top"
                            >
                              <img
                                src="https://cdn.pinpoint.net.au/product/auspost-shopping-bull-teal.jpg"
                                width="20"
                                height="auto"
                                border="0"
                                style="display: block"
                                alt=""
                              />
                            </td>
                            <td width="15">&nbsp;</td>
                            <td
                              align="left"
                              style="
                                font-family: Arial, sans-serif;
                                font-size: 16px;
                                color: #4d4d54;
                                line-height: 24px;
                              "
                              valign="top"
                            >
                              Reload your card.
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                    <tr valign="top">
                      <td>
                        <table
                          cellpadding="0"
                          cellspacing="0"
                          border="0"
                          width="100%"
                        >
                          <tr valign="top">
                            <td
                              width="20"
                              style="
                                font-family: Arial, sans-serif;
                                font-size: 16px;
                                color: #dc1928;
                                line-height: 24px;
                              "
                              align="center"
                              valign="top"
                            >
                              <img
                                src="https://cdn.pinpoint.net.au/product/auspost-shopping-bull-teal.jpg"
                                width="20"
                                height="auto"
                                border="0"
                                style="display: block"
                                alt=""
                              />
                            </td>
                            <td width="15">&nbsp;</td>
                            <td
                              align="left"
                              style="
                                font-family: Arial, sans-serif;
                                font-size: 16px;
                                color: #4d4d54;
                                line-height: 24px;
                              "
                              valign="top"
                            >
                              Manage your personal information and card details.
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </td>
  </tr>
</table>
<!-- /FULL WIDTH BULLETS TEAL -->`
    }
  },
  {
    id: 10,
    name: `columnsImgRightA`,
    type: `columns`,
    path: `/columns/image-right-a`,
    data: {
      heading: `Image Right A`,
      tag: `Now that the core modules are set up, we can add optional modules.`,
      instructions: `Place all optional modules inside of the body module. Use the comments in the code to seperate each block and know where they start and end.`,
      preview: true,
      html: `<!-- COLUMNS - IMAGE RIGHT A -->
<table
  cellpadding="0"
  cellspacing="0"
  border="0"
  width="100%"
  bgcolor="#31313d"
>
  <tr>
    <td align="center">
      <!--[if gte mso 9]>
                                                        <table cellpadding="0" cellspacing="0" border="0" width="100%" dir="rtl">
                                                        <tr>
                                                        <td align="right" valign="top" width="260" style="width: 260px;" dir="ltr">
                                                    <![endif]-->

      <table
        align="right"
        border="0"
        cellpadding="0"
        cellspacing="0"
        class="width-100"
        style="width: 260px"
        width="260"
      >
        <tr>
          <td align="right">
            <img
              src="https://cdn.pinpoint.net.au/product/auspost-ecommerce-img-2.jpg"
              width="260"
              height="auto"
              border="0"
              style="display: block"
              class="mobile-hide"
            />
          </td>
        </tr>
      </table>

      <!--[if gte mso 9]>
                                                        </td>
                                                        <td align="left" valign="top"  width="320" style="width: 320px;"  dir="ltr">
                                                    <![endif]-->

      <table
        align="left"
        border="0"
        cellpadding="0"
        cellspacing="0"
        class="width-100"
        style="width: 320px"
        width="320"
      >
        <tr>
          <td align="left">
            <table cellpadding="0" cellspacing="0" border="0" width="100%">
              <tr>
                <td style="padding: 50px 40px 0 40px" class="padding-45-30">
                  <table
                    cellpadding="0"
                    cellspacing="0"
                    border="0"
                    width="100%"
                  >
                    <tr>
                      <td
                        style="
                          font-family: Arial, sans-serif;
                          color: #ffffff;
                          font-size: 14px;
                          padding: 0 0 10px 0;
                          text-transform: uppercase;
                        "
                      >
                        GET SAVVY WITH
                      </td>
                    </tr>
                    <tr>
                      <td
                        style="
                          font-family: Arial, sans-serif;
                          color: #ffffff;
                          font-size: 24px;
                          line-height: 34px;
                          padding: 0 0 30px 0;
                        "
                      >
                        Shopping on international
                        <span class="mobile-hide"><br /></span>websites
                      </td>
                    </tr>
                    <tr>
                      <td
                        style="
                          font-family: Arial, sans-serif;
                          color: #ffffff;
                          font-size: 16px;
                          line-height: 22px;
                          padding: 0 0 35px 0;
                        "
                      >
                        Spotted a bargain on an international website? Avoid
                        being stung with unknown fees<sup>2</sup>
                        by locking in your exchange rates<sup>3</sup>.
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div>
                          <!--[if mso]>
                                                                                    <v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="https://auspost.com.au/shopping-offers/shopping-tips/saving-money/save-money-online-shopping" style="height:45px;v-text-anchor:middle;width:145px;" arcsize="14%" stroke="f" fillcolor="#dc1928">
                                                                                        <w:anchorlock/>
                                                                                        <center>
                                                                                    <![endif]-->
                          <a
                            href="https://auspost.com.au/shopping-offers/shopping-tips/saving-money/save-money-online-shopping"
                            target="_blank"
                            style="
                              background-color: #dc1928;
                              border-radius: 6px;
                              color: #ffffff;
                              display: inline-block;
                              font-family: sans-serif;
                              font-size: 15px;
                              line-height: 45px;
                              text-align: center;
                              text-decoration: none;
                              width: 145px;
                              -webkit-text-size-adjust: none;
                            "
                            >Find out more</a
                          >
                          <!--[if mso]>
                                                                                        </center>
                                                                                    </v:roundrect>
                                                                                    <![endif]-->
                        </div>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>

      <!--[if gte mso 9]>
                                                        </td>
                                                        </tr>
                                                        </table>
                                                    <![endif]-->
    </td>
  </tr>
</table>
<!-- /COLUMNS - IMAGE RIGHT A -->`
    }
  },
  {
    id: 11,
    name: `columnsImgLeftA`,
    type: `columns`,
    path: `/columns/image-left-a`,
    data: {
      heading: `Image Left A`,
      tag: `Now that the core modules are set up, we can add optional modules.`,
      instructions: `Place all optional modules inside of the body module. Use the comments in the code to seperate each block and know where they start and end.`,
      preview: true,
      html: `<!-- COLUMNS - IMAGE LEFT A -->
<table
  cellpadding="0"
  cellspacing="0"
  border="0"
  width="100%"
  bgcolor="#31313d"
>
  <tr>
    <td align="center">
      <!--[if gte mso 9]>
        <table cellpadding="0" cellspacing="0" border="0" width="100%">
        <tr>
        <td align="left" valign="top" width="260" style="width: 260px;">
      <![endif]-->

      <table
        align="left"
        border="0"
        cellpadding="0"
        cellspacing="0"
        class="width-100"
        style="width: 260px"
        width="260"
      >
        <tr>
          <td align="left">
            <img
              src="https://cdn.pinpoint.net.au/product/auspost-ecommerce-img-2.jpg"
              width="260"
              height="auto"
              border="0"
              style="display: block"
              class="mobile-hide"
            />
          </td>
        </tr>
      </table>

      <!--[if gte mso 9]>
        </td>
        <td align="left" valign="top"  width="320" style="width: 320px;">
      <![endif]-->

      <table
        align="left"
        border="0"
        cellpadding="0"
        cellspacing="0"
        class="width-100"
        style="width: 320px"
        width="320"
      >
        <tr>
          <td align="left">
            <table cellpadding="0" cellspacing="0" border="0" width="100%">
              <tr>
                <td style="padding: 50px 40px 0 40px" class="padding-45-30">
                  <table
                    cellpadding="0"
                    cellspacing="0"
                    border="0"
                    width="100%"
                  >
                    <tr>
                      <td
                        style="
                          font-family: Arial, sans-serif;
                          color: #ffffff;
                          font-size: 14px;
                          padding: 0 0 10px 0;
                          text-transform: uppercase;
                        "
                      >
                        GET SAVVY WITH
                      </td>
                    </tr>
                    <tr>
                      <td
                        style="
                          font-family: Arial, sans-serif;
                          color: #ffffff;
                          font-size: 24px;
                          line-height: 34px;
                          padding: 0 0 30px 0;
                        "
                      >
                        Shopping on international
                        <span class="mobile-hide"><br /></span>websites
                      </td>
                    </tr>
                    <tr>
                      <td
                        style="
                          font-family: Arial, sans-serif;
                          color: #ffffff;
                          font-size: 16px;
                          line-height: 22px;
                          padding: 0 0 35px 0;
                        "
                      >
                        Spotted a bargain on an international website? Avoid
                        being stung with unknown fees<sup>2</sup>
                        by locking in your exchange rates<sup>3</sup>.
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div>
                          <!--[if mso]>
                            <v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="https://auspost.com.au/shopping-offers/shopping-tips/saving-money/save-money-online-shopping" style="height:45px;v-text-anchor:middle;width:145px;" arcsize="14%" stroke="f" fillcolor="#dc1928">
                            <w:anchorlock/>
                            <center>
                          <![endif]-->
                          <a
                            href="https://auspost.com.au/shopping-offers/shopping-tips/saving-money/save-money-online-shopping"
                            target="_blank"
                            style="
                              background-color: #dc1928;
                              border-radius: 6px;
                              color: #ffffff;
                              display: inline-block;
                              font-family: sans-serif;
                              font-size: 15px;
                              line-height: 45px;
                              text-align: center;
                              text-decoration: none;
                              width: 145px;
                              -webkit-text-size-adjust: none;
                            "
                            >Find out more</a
                          >
                          <!--[if mso]>
                            </center>
                            </v:roundrect>
                          <![endif]-->
                        </div>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>

      <!--[if gte mso 9]>
          </td>
          </tr>
          </table>
      <![endif]-->
    </td>
  </tr>
</table>
<!-- /COLUMNS - IMAGE LEFT A -->`
    }
  },
  {
    id: 12,
    name: `columnsImgRightB`,
    type: `columns`,
    path: `/columns/image-right-b`,
    data: {
      heading: `Image Right B`,
      tag: `Now that the core modules are set up, we can add optional modules.`,
      instructions: `Place all optional modules inside of the body module. Use the comments in the code to seperate each block and know where they start and end.`,
      preview: true,
      html: `<!-- COLUMNS - IMAGE RIGHT B -->
      <table
        cellpadding="1"
        cellspacing="0"
        border="0"
        width="100%"
        bgcolor="#e2e2e2"
      >
        <tr>
          <td>
            <table
              cellpadding="0"
              cellspacing="0"
              border="0"
              width="100%"
              bgcolor="#ffffff"
            >
              <tr>
                <td>
                  <!--[if gte mso 9]>
                      <table cellpadding="0" cellspacing="0" border="0" width="100%">
                      <tr dir="rtl">
                      <td align="left" valign="top" width="340" style="width: 340px;" dir="ltr">
                  <![endif]-->

                  <table
                    align="right"
                    border="0"
                    cellpadding="0"
                    cellspacing="0"
                    class="width-100"
                    style="width: 235px"
                    width="235"
                  >
                    <tr>
                      <td>
                        <table
                          cellpadding="0"
                          cellspacing="0"
                          border="0"
                          width="100%"
                        >
                          <tr>
                            <td align="center">
                              <img
                                src="https://cdn.pinpoint.net.au/product/auspost-industry-img-2.jpg"
                                width="235"
                                height="auto"
                                border="0"
                                style="display: block; width: 235px"
                                class="img-100"
                                alt=""
                              />
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                  </table>

                  <!--[if gte mso 9]>
                      </td>
                      <td align="left" valign="top"  width="235" style="width: 235px;" dir="ltr">
                  <![endif]-->

                  <table
                    align="left"
                    border="0"
                    cellpadding="0"
                    cellspacing="0"
                    class="width-100"
                    style="width: 340px"
                    width="340"
                  >
                    <tr>
                      <td align="left">
                        <table
                          cellpadding="0"
                          cellspacing="0"
                          border="0"
                          width="100%"
                        >
                          <tr>
                            <td align="center" style="padding: 30px">
                              <table
                                cellpadding="0"
                                cellspacing="0"
                                border="0"
                                width="100%"
                              >
                                <tr>
                                  <td
                                    align="left"
                                    style="
                                      font-size: 20px;
                                      font-family: Arial, sans-serif;
                                      color: #4d4d54;
                                      font-weight: bold;
                                      letter-spacing: 0;
                                      line-height: 24px;
                                      padding: 0 0 12px 0;
                                    "
                                  >
                                    Groceries
                                  </td>
                                </tr>
                                <tr>
                                  <td
                                    align="left"
                                    style="
                                      font-size: 16px;
                                      font-family: Arial, sans-serif;
                                      color: #4d4d54;
                                      letter-spacing: 0;
                                      line-height: 24px;
                                    "
                                  >
                                    Order online from the couch or head<span
                                      class="mobile-hide"
                                      ><br
                                    /></span>
                                    in-store, use your card anywhere Mastercard is
                                    accepted<sup>3</sup>.
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                  </table>

                  <!--[if gte mso 9]>
                    </td>
                    </tr>
                    </table>
                <![endif]-->
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
      <!-- /COLUMNS - IMAGE LEFT RIGHT B -->`
    }
  },
  {
    id: 13,
    name: `columnsImgLeftB`,
    type: `columns`,
    path: `/columns/image-left-b`,
    data: {
      heading: `Image Left B`,
      tag: `Now that the core modules are set up, we can add optional modules.`,
      instructions: `Place all optional modules inside of the body module. Use the comments in the code to seperate each block and know where they start and end.`,
      preview: true,
      html: `<!-- COLUMNS - IMAGE LEFT B -->
      <table
        cellpadding="1"
        cellspacing="0"
        border="0"
        width="100%"
        bgcolor="#e2e2e2"
      >
        <tr>
          <td>
            <table
              cellpadding="0"
              cellspacing="0"
              border="0"
              width="100%"
              bgcolor="#ffffff"
            >
              <tr>
                <td>
                  <!--[if gte mso 9]>
                      <table cellpadding="0" cellspacing="0" border="0" width="100%">
                      <tr>
                      <td align="left" valign="top" width="235" style="width: 235px;">
                  <![endif]-->

                  <table
                    align="left"
                    border="0"
                    cellpadding="0"
                    cellspacing="0"
                    class="width-100"
                    style="width: 235px"
                    width="235"
                  >
                    <tr>
                      <td>
                        <table
                          cellpadding="0"
                          cellspacing="0"
                          border="0"
                          width="100%"
                        >
                          <tr>
                            <td align="center">
                              <img
                                src="https://cdn.pinpoint.net.au/product/auspost-industry-img-1.jpg"
                                width="235"
                                height="auto"
                                border="0"
                                style="display: block; width: 235px"
                                class="img-100"
                                alt=""
                              />
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                  </table>

                  <!--[if gte mso 9]>
                      </td>
                      <td align="left" valign="top"  width="340" style="width: 340px;">
                  <![endif]-->

                  <table
                    align="left"
                    border="0"
                    cellpadding="0"
                    cellspacing="0"
                    class="width-100"
                    style="width: 340px"
                    width="340"
                  >
                    <tr>
                      <td align="left">
                        <table
                          cellpadding="0"
                          cellspacing="0"
                          border="0"
                          width="100%"
                        >
                          <tr>
                            <td
                              align="center"
                              style="padding: 30px 30px 0 30px"
                              class="padding-30"
                            >
                              <table
                                cellpadding="0"
                                cellspacing="0"
                                border="0"
                                width="100%"
                              >
                                <tr>
                                  <td
                                    align="left"
                                    style="
                                      font-size: 20px;
                                      font-family: Arial, sans-serif;
                                      color: #4d4d54;
                                      font-weight: bold;
                                      letter-spacing: 0;
                                      line-height: 24px;
                                      padding: 0 0 12px 0;
                                    "
                                  >
                                    Clothing
                                  </td>
                                </tr>
                                <tr>
                                  <td
                                    align="left"
                                    style="
                                      font-size: 16px;
                                      font-family: Arial, sans-serif;
                                      color: #4d4d54;
                                      letter-spacing: 0;
                                      line-height: 24px;
                                    "
                                  >
                                    Be savvy and avoid conversion fees<sup>1</sup>
                                    when shopping on international websites. Lock in
                                    and load up to 10 foreign currencies to start
                                    taking advantage of the best online shopping deals
                                    today<sup>2</sup>.
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                  </table>

                  <!--[if gte mso 9]>
                      </td>
                      </tr>
                      </table>
                  <![endif]-->
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
      <!-- /COLUMNS - IMAGE LEFT B -->`
    }
  },
  {
    id: 14,
    name: `columnsImgRightC`,
    type: `columns`,
    path: `/columns/image-right-c`,
    data: {
      heading: `Image Right C`,
      tag: `Now that the core modules are set up, we can add optional modules.`,
      instructions: `Place all optional modules inside of the body module. Use the comments in the code to seperate each block and know where they start and end.`,
      preview: true,
      html: `<!-- COLUMNS - IMAGE RIGHT C -->
      <table
        cellpadding="1"
        cellspacing="0"
        border="0"
        width="100%"
        bgcolor="#e2e2e2"
        class="bg-white"
      >
        <tr>
          <td>
            <table
              cellpadding="0"
              cellspacing="0"
              border="0"
              width="100%"
              bgcolor="#ffffff"
            >
              <tr>
                <td>
                  <!--[if gte mso 9]>
                      <table cellpadding="0" cellspacing="0" border="0" width="100%">
                      <tr dir="rtl">
                      <td align="left" valign="top" width="340" style="width: 340px;" dir="ltr">
                  <![endif]-->

                  <table
                    align="right"
                    border="0"
                    cellpadding="0"
                    cellspacing="0"
                    class="width-100"
                    style="width: 235px"
                    width="235"
                  >
                    <tr>
                      <td>
                        <table
                          cellpadding="0"
                          cellspacing="0"
                          border="0"
                          width="100%"
                        >
                          <tr>
                            <td align="center">
                              <img
                                src="https://cdn.pinpoint.net.au/product/auspost-welcome-img-1.jpg"
                                width="235"
                                height="auto"
                                border="0"
                                style="display: block; width: 235px"
                                class="mobile-hide"
                                alt=""
                              />
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                  </table>

                  <!--[if gte mso 9]>
                      </td>
                      <td align="left" valign="top"  width="235" style="width: 235px;" dir="ltr">
                  <![endif]-->

                  <table
                    align="left"
                    border="0"
                    cellpadding="0"
                    cellspacing="0"
                    class="width-100"
                    style="width: 340px"
                    width="340"
                  >
                    <tr>
                      <td align="left">
                        <table
                          cellpadding="0"
                          cellspacing="0"
                          border="0"
                          width="100%"
                          bgcolor="#ffffff"
                        >
                          <tr>
                            <td style="padding: 30px">
                              <table
                                cellpadding="0"
                                cellspacing="0"
                                border="0"
                                width="100%"
                                bgcolor="#ffffff"
                              >
                                <tr>
                                  <td
                                    style="padding: 0 0 20px 0"
                                    class="padding-none"
                                  >
                                    <table
                                      cellpadding="0"
                                      cellspacing="0"
                                      border="0"
                                      width="100%"
                                    >
                                      <tr>
                                        <td
                                          style="
                                            font-family: Arial, sans-serif;
                                            font-size: 12px;
                                            line-height: 16px;
                                            color: #212129;
                                            padding: 0 0 5px 0;
                                          "
                                        >
                                          STEP 1
                                        </td>
                                      </tr>
                                      <tr valign="top">
                                        <td
                                          align="left"
                                          style="
                                            font-family: Arial, sans-serif;
                                            font-size: 28px;
                                            color: #212129;
                                            letter-spacing: 0;
                                            line-height: 36px;
                                            padding: 0 0 10px 0;
                                          "
                                          class="font-30"
                                        >
                                          Get started
                                        </td>
                                      </tr>
                                    </table>
                                  </td>
                                </tr>
                                <tr>
                                  <td
                                    style="
                                      padding: 0 30px 45px 0;
                                      color: #4d4d54;
                                      font-family: Arial, sans-serif;
                                      font-size: 16px;
                                      letter-spacing: 0;
                                      line-height: 24px;
                                    "
                                    class="padding-30-15"
                                  >
                                    Register your card. You'll have access to My
                                    Account, which lets you -
                                    <table
                                      cellpadding="0"
                                      cellspacing="0"
                                      border="0"
                                      width="100%"
                                    >
                                      <tr valign="top">
                                        <td style="padding: 60px 0 40px 0">
                                          <table
                                            cellpadding="0"
                                            cellspacing="0"
                                            border="0"
                                            width="100%"
                                          >
                                            <tr valign="top">
                                              <td
                                                width="20"
                                                style="
                                                  font-family: Arial, sans-serif;
                                                  font-size: 16px;
                                                  color: #dc1928;
                                                  line-height: 24px;
                                                "
                                                align="center"
                                                valign="top"
                                              >
                                                <img
                                                  src="https://cdn.pinpoint.net.au/product/auspost-shopping-bull1.jpg"
                                                  width="20"
                                                  height="auto"
                                                  border="0"
                                                  style="display: block"
                                                  alt=""
                                                />
                                              </td>
                                              <td width="15">&nbsp;</td>
                                              <td
                                                align="left"
                                                style="
                                                  font-family: Arial, sans-serif;
                                                  font-size: 16px;
                                                  color: #4d4d54;
                                                  line-height: 24px;
                                                "
                                                valign="top"
                                              >
                                                Check your balance anytime
                                              </td>
                                            </tr>
                                          </table>
                                        </td>
                                      </tr>
                                      <tr valign="top">
                                        <td style="padding: 0 0 25px 0">
                                          <table
                                            cellpadding="0"
                                            cellspacing="0"
                                            border="0"
                                            width="100%"
                                          >
                                            <tr valign="top">
                                              <td
                                                width="20"
                                                style="
                                                  font-family: Arial, sans-serif;
                                                  font-size: 16px;
                                                  color: #dc1928;
                                                  line-height: 24px;
                                                "
                                                align="center"
                                                valign="top"
                                              >
                                                <img
                                                  src="https://cdn.pinpoint.net.au/product/auspost-shopping-bull1.jpg"
                                                  width="20"
                                                  height="auto"
                                                  border="0"
                                                  style="display: block"
                                                  alt=""
                                                />
                                              </td>
                                              <td width="15">&nbsp;</td>
                                              <td
                                                align="left"
                                                style="
                                                  font-family: Arial, sans-serif;
                                                  font-size: 16px;
                                                  color: #4d4d54;
                                                  line-height: 24px;
                                                "
                                                valign="top"
                                              >
                                                Easily reload on the go
                                              </td>
                                            </tr>
                                          </table>
                                        </td>
                                      </tr>
                                      <tr valign="top">
                                        <td style="padding: 0 0 25px 0">
                                          <table
                                            cellpadding="0"
                                            cellspacing="0"
                                            border="0"
                                            width="100%"
                                          >
                                            <tr valign="top">
                                              <td
                                                width="20"
                                                style="
                                                  font-family: Arial, sans-serif;
                                                  font-size: 16px;
                                                  color: #dc1928;
                                                  line-height: 24px;
                                                "
                                                align="center"
                                                valign="top"
                                              >
                                                <img
                                                  src="https://cdn.pinpoint.net.au/product/auspost-shopping-bull1.jpg"
                                                  width="20"
                                                  height="auto"
                                                  border="0"
                                                  style="display: block"
                                                  alt=""
                                                />
                                              </td>
                                              <td width="15">&nbsp;</td>
                                              <td
                                                align="left"
                                                style="
                                                  font-family: Arial, sans-serif;
                                                  font-size: 16px;
                                                  color: #4d4d54;
                                                  line-height: 24px;
                                                "
                                                valign="top"
                                              >
                                                Track your transactions and spending
                                                in real- time
                                              </td>
                                            </tr>
                                          </table>
                                        </td>
                                      </tr>
                                      <tr valign="top">
                                        <td>
                                          <table
                                            cellpadding="0"
                                            cellspacing="0"
                                            border="0"
                                            width="100%"
                                          >
                                            <tr valign="top">
                                              <td
                                                width="20"
                                                style="
                                                  font-family: Arial, sans-serif;
                                                  font-size: 16px;
                                                  color: #dc1928;
                                                  line-height: 24px;
                                                "
                                                align="center"
                                                valign="top"
                                              >
                                                <img
                                                  src="https://cdn.pinpoint.net.au/product/auspost-shopping-bull1.jpg"
                                                  width="20"
                                                  height="auto"
                                                  border="0"
                                                  style="display: block"
                                                  alt=""
                                                />
                                              </td>
                                              <td width="15">&nbsp;</td>
                                              <td
                                                align="left"
                                                style="
                                                  font-family: Arial, sans-serif;
                                                  font-size: 16px;
                                                  color: #4d4d54;
                                                  line-height: 24px;
                                                "
                                                valign="top"
                                              >
                                                Manage your personal information and
                                                card details
                                              </td>
                                            </tr>
                                          </table>
                                        </td>
                                      </tr>
                                    </table>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <div>
                                      <!--[if mso]>
                                        <v:roundrect
                                          xmlns:v="urn:schemas-microsoft-com:vml"
                                          xmlns:w="urn:schemas-microsoft-com:office:word"
                                          href="https://everyday.card.auspost/get-card/step-1/"
                                          style="
                                            height: 45px;
                                            v-text-anchor: middle;
                                            width: 145px;
                                          "
                                          arcsize="14%"
                                          strokecolor="#dc1928"
                                          fillcolor="#ffffff"
                                        >
                                          <w:anchorlock />
                                          <center
                                            style="
                                              color: #dc1928;
                                              font-family: sans-serif;
                                              font-size: 13px;
                                              font-weight: bold;
                                            "
                                          >
                                            Register now
                                          </center>
                                        </v:roundrect> <!
                                      [endif]--><a
                                        href="https://everyday.card.auspost/get-card/step-1/"
                                        target="_blank"
                                        style="
                                          background-color: #ffffff;
                                          border: 1px solid #dc1928;
                                          border-radius: 6px;
                                          color: #dc1928;
                                          display: inline-block;
                                          font-family: sans-serif;
                                          font-size: 15px;
                                          font-weight: bold;
                                          line-height: 45px;
                                          text-align: center;
                                          text-decoration: none;
                                          width: 145px;
                                          -webkit-text-size-adjust: none;
                                          mso-hide: all;
                                        "
                                        class="width-100"
                                        >Register now</a
                                      >
                                    </div>
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                  </table>

                  <!--[if gte mso 9]>
                      </td>
                      </tr>
                      </table>
                  <![endif]-->
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
      <!-- /COLUMNS - IMAGE RIGHT C -->`
    }
  },
  {
    id: 15,
    name: `columnsImgLeftC`,
    type: `columns`,
    path: `/columns/image-left-c`,
    data: {
      heading: `Image Left C`,
      tag: `Now that the core modules are set up, we can add optional modules.`,
      instructions: `Place all optional modules inside of the body module. Use the comments in the code to seperate each block and know where they start and end.`,
      preview: true,
      html: `<!-- COLUMNS - IMAGE LEFT C -->
      <table
        cellpadding="1"
        cellspacing="0"
        border="0"
        width="100%"
        bgcolor="#e2e2e2"
        class="bg-white"
      >
        <tr>
          <td>
            <table
              cellpadding="0"
              cellspacing="0"
              border="0"
              width="100%"
              bgcolor="#ffffff"
            >
              <tr>
                <td>
                  <!--[if gte mso 9]>
                        <table cellpadding="0" cellspacing="0" border="0" width="100%">
                        <tr>
                        <td align="left" valign="top" width="235" style="width: 235px;">
                    <![endif]-->

                  <table
                    align="left"
                    border="0"
                    cellpadding="0"
                    cellspacing="0"
                    class="width-100"
                    style="width: 235px"
                    width="235"
                  >
                    <tr>
                      <td>
                        <table
                          cellpadding="0"
                          cellspacing="0"
                          border="0"
                          width="100%"
                        >
                          <tr>
                            <td align="center">
                              <img
                                src="https://cdn.pinpoint.net.au/product/auspost-welcome-img-2.jpg"
                                width="235"
                                height="auto"
                                border="0"
                                style="display: block; width: 235px"
                                class="img-100"
                                alt=""
                              />
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                  </table>

                  <!--[if gte mso 9]>
                      </td>
                      <td align="left" valign="top"  width="340" style="width: 340px;">
                  <![endif]-->

                  <table
                    align="left"
                    border="0"
                    cellpadding="0"
                    cellspacing="0"
                    class="width-100"
                    style="width: 340px"
                    width="340"
                  >
                    <tr>
                      <td align="left">
                        <table
                          cellpadding="0"
                          cellspacing="0"
                          border="0"
                          width="100%"
                          bgcolor="#ffffff"
                        >
                          <tr>
                            <td style="padding: 30px">
                              <table
                                cellpadding="0"
                                cellspacing="0"
                                border="0"
                                width="100%"
                                bgcolor="#ffffff"
                              >
                                <tr>
                                  <td
                                    style="padding: 0 0 20px 0"
                                    class="padding-none"
                                  >
                                    <table
                                      cellpadding="0"
                                      cellspacing="0"
                                      border="0"
                                      width="100%"
                                    >
                                      <tr>
                                        <td
                                          style="
                                            font-family: Arial, sans-serif;
                                            font-size: 12px;
                                            line-height: 16px;
                                            color: #212129;
                                            padding: 0 0 5px 0;
                                          "
                                        >
                                          STEP 2
                                        </td>
                                      </tr>
                                      <tr valign="top">
                                        <td
                                          align="left"
                                          style="
                                            font-family: Arial, sans-serif;
                                            font-size: 28px;
                                            color: #212129;
                                            letter-spacing: 0;
                                            line-height: 36px;
                                            padding: 0 0 10px 0;
                                          "
                                          class="font-30"
                                        >
                                          Have 24/7 control
                                        </td>
                                      </tr>
                                    </table>
                                  </td>
                                </tr>
                                <tr>
                                  <td
                                    style="
                                      color: #4d4d54;
                                      font-family: Arial, sans-serif;
                                      font-size: 16px;
                                      letter-spacing: 0;
                                      line-height: 24px;
                                    "
                                  >
                                    Just like
                                    <a
                                      href="https://everyday.card.auspost/login"
                                      style="
                                        color: #dc1928;
                                        text-decoration: underline;
                                      "
                                      >My Account</a
                                    >, the
                                    <a
                                      href="https://auspost.com.au/money-insurance/prepaid-cards/everyday-mastercard"
                                      style="
                                        color: #dc1928;
                                        text-decoration: underline;
                                      "
                                      >Everyday Mastercard App</a
                                    >
                                    allows you to check your balance and manage your
                                    real-time spending. Download now and set yourself
                                    up.
                                  </td>
                                </tr>
                                <tr>
                                  <td style="padding: 30px 0 0 0">
                                    <a
                                      href="https://apps.apple.com/au/app/everyday/id1465684338"
                                      target="_blank"
                                    >
                                      <img
                                        src="https://cdn.pinpoint.net.au/product/auspost-appstore.jpg"
                                        width="132"
                                        height="auto"
                                        border="0"
                                        style="display: block; width: 132px"
                                        alt="App store"
                                      />
                                    </a>
                                  </td>
                                </tr>
                                <tr>
                                  <td style="padding: 15px 0 0 0">
                                    <a
                                      href="https://play.google.com/store/apps/details?id=au.com.auspost.cashpassport"
                                      target="_blank"
                                    >
                                      <img
                                        src="https://cdn.pinpoint.net.au/product/auspost-googleplay.jpg"
                                        width="132"
                                        height="auto"
                                        border="0"
                                        style="display: block; width: 132px"
                                        alt="Google play"
                                      />
                                    </a>
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                  </table>

                  <!--[if gte mso 9]>
                      </td>
                      </tr>
                      </table>
                  <![endif]-->
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
      <!-- /COLUMNS - IMAGE LEFT C -->`
    }
  },
  {
    id: 16,
    name: `splitColumns`,
    type: `columns`,
    path: `/columns/split-columns`,
    data: {
      heading: `Split Columns`,
      tag: `Now that the core modules are set up, we can add optional modules.`,
      instructions: `Place all optional modules inside of the body module. Use the comments in the code to seperate each block and know where they start and end.`,
      preview: true,
      html: `<!-- SPLIT COLUMNS -->
      <table cellpadding="0" cellspacing="0" border="0" width="100%">
        <tr>
          <td align="center" class="padding-20">
            <!--[if gte mso 9]>
                <table cellpadding="0" cellspacing="0" border="0" width="100%">
                <tr>
                <td align="right" valign="top" width="300" style="width: 300px;">
            <![endif]-->

            <table
              align="left"
              border="0"
              cellpadding="0"
              cellspacing="0"
              class="width-100"
              style="width: 300px"
              width="300"
            >
              <tr>
                <td align="right" style="padding: 0 20px 0 0" class="padding-none">
                  <table cellpadding="0" cellspacing="0" border="0" width="100%">
                    <tr>
                      <td align="center">
                        <img
                          src="https://cdn.pinpoint.net.au/product/auspost-security-img-1.jpg"
                          width="280"
                          height="auto"
                          border="0"
                          style="display: block"
                          alt=""
                          class="img-100"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <table
                          border="0"
                          bgcolor="#e2e2e2"
                          cellpadding="1"
                          cellspacing="0"
                          width="100%"
                        >
                          <tr>
                            <td>
                              <table
                                border="0"
                                bgcolor="#ffffff"
                                cellpadding="0"
                                cellspacing="0"
                                width="100%"
                              >
                                <tr>
                                  <td style="padding: 30px">
                                    <table
                                      border="0"
                                      cellpadding="0"
                                      cellspacing="0"
                                      width="100%"
                                    >
                                      <tr>
                                        <td
                                          style="
                                            color: #4d4d54;
                                            font-family: Arial, sans-serif;
                                            font-size: 20px;
                                            font-weight: bold;
                                            letter-spacing: 0;
                                            line-height: 24px;
                                            padding: 0 0 25px 0;
                                          "
                                        >
                                          Track your transactions
                                        </td>
                                      </tr>
                                      <tr>
                                        <td
                                          style="
                                            font-family: Arial, sans-serif;
                                            font-size: 16px;
                                            color: #4d4d54;
                                            line-height: 24px;
                                            padding: 0 0 25px 0;
                                          "
                                        >
                                          Although you're protected with
                                          <a
                                            href="https://www.mastercard.com.au/en-au/about-mastercard/what-we-do/terms-of-use/zero-liability-terms-conditions.html"
                                            style="
                                              color: #4d4d54;
                                              text-decoration: underline;
                                            "
                                            >Mastercard's Zero Liability</a
                                          ><sup>1</sup>, it's important to be
                                          proactive in safeguarding your personal
                                          information and account details.
                                        </td>
                                      </tr>
                                      <tr>
                                        <td>
                                          <table
                                            cellpadding="0"
                                            cellspacing="0"
                                            border="0"
                                            width="100%"
                                          >
                                            <tr>
                                              <td width="8" style="width: 8px">
                                                <img
                                                  src="https://cdn.pinpoint.net.au/product/auspost-arrow-red.png"
                                                  width="8"
                                                  height="auto"
                                                  border="0"
                                                  style="display: block"
                                                  alt=""
                                                />
                                              </td>
                                              <td width="5" style="width: 5px">
                                                &nbsp;
                                              </td>
                                              <td
                                                style="
                                                  font-family: Arial, sans-serif;
                                                  font-size: 16px;
                                                  color: #4d4d54;
                                                  line-height: 24px;
                                                  font-weight: bold;
                                                "
                                              >
                                                <a
                                                  href="https://everyday.card.auspost/login"
                                                  style="
                                                    color: #4d4d54;
                                                    text-decoration: none;
                                                  "
                                                  >Track My Account</a
                                                >
                                              </td>
                                            </tr>
                                          </table>
                                        </td>
                                      </tr>
                                    </table>
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>

            <!--[if gte mso 9]>
                </td>
                <td align="left" valign="top"  width="280" style="width: 280px;">
            <![endif]-->

            <table
              align="left"
              border="0"
              cellpadding="0"
              cellspacing="0"
              class="width-100-margin-20"
              style="width: 280px"
              width="280"
            >
              <tr>
                <td align="left">
                  <table cellpadding="0" cellspacing="0" border="0" width="100%">
                    <tr>
                      <td>
                        <table
                          cellpadding="0"
                          cellspacing="0"
                          border="0"
                          width="100%"
                        >
                          <tr>
                            <td align="center">
                              <img
                                src="https://cdn.pinpoint.net.au/product/auspost-security-img-2.jpg"
                                width="280"
                                height="auto"
                                border="0"
                                style="display: block"
                                alt=""
                                class="img-100"
                              />
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <table
                                border="0"
                                bgcolor="#e2e2e2"
                                cellpadding="1"
                                cellspacing="0"
                                width="100%"
                              >
                                <tr>
                                  <td>
                                    <table
                                      border="0"
                                      bgcolor="#ffffff"
                                      cellpadding="0"
                                      cellspacing="0"
                                      width="100%"
                                    >
                                      <tr>
                                        <td style="padding: 30px">
                                          <table
                                            border="0"
                                            cellpadding="0"
                                            cellspacing="0"
                                            width="100%"
                                          >
                                            <tr>
                                              <td
                                                style="
                                                  color: #4d4d54;
                                                  font-family: Arial, sans-serif;
                                                  font-size: 20px;
                                                  font-weight: bold;
                                                  letter-spacing: 0;
                                                  line-height: 24px;
                                                  padding: 0 0 25px 0;
                                                "
                                              >
                                                A guide to safe online shopping
                                              </td>
                                            </tr>
                                            <tr>
                                              <td
                                                style="
                                                  font-family: Arial, sans-serif;
                                                  font-size: 16px;
                                                  color: #4d4d54;
                                                  line-height: 24px;
                                                  padding: 0 0 25px 0;
                                                "
                                              >
                                                When it comes to shopping safely
                                                online, how can you best protect
                                                yourself from scams? Follow these
                                                simple tips.
                                                <br /><br />
                                              </td>
                                            </tr>
                                            <tr>
                                              <td>
                                                <table
                                                  cellpadding="0"
                                                  cellspacing="0"
                                                  border="0"
                                                  width="100%"
                                                >
                                                  <tr>
                                                    <td width="8" style="width: 8px">
                                                      <img
                                                        src="https://cdn.pinpoint.net.au/product/auspost-arrow-red.png"
                                                        width="8"
                                                        height="auto"
                                                        border="0"
                                                        style="display: block"
                                                        alt=""
                                                      />
                                                    </td>
                                                    <td width="5" style="width: 5px">
                                                      &nbsp;
                                                    </td>
                                                    <td
                                                      style="
                                                        font-family: Arial, sans-serif;
                                                        font-size: 16px;
                                                        color: #4d4d54;
                                                        line-height: 24px;
                                                        font-weight: bold;
                                                      "
                                                    >
                                                      <a
                                                        href="https://auspost.com.au/shopping-offers/shopping-tips/safety-and-security/a-guide-to-safe-online-shopping-our-top-tips"
                                                        style="
                                                          color: #4d4d54;
                                                          text-decoration: none;
                                                        "
                                                        >Read more</a
                                                      >
                                                    </td>
                                                  </tr>
                                                </table>
                                              </td>
                                            </tr>
                                          </table>
                                        </td>
                                      </tr>
                                    </table>
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>

            <!--[if gte mso 9]>
                </td>
                </tr>
                </table>
            <![endif]-->
          </td>
        </tr>
      </table>
      <!-- /SPLIT COLUMNS -->`
    }
  },
  {
    id: 17,
    name: `table`,
    type: `other`,
    path: `/other/table`,
    data: {
      heading: `Table`,
      tag: `Now that the core modules are set up, we can add optional modules.`,
      instructions: `Place all optional modules inside of the body module. Use the comments in the code to seperate each block and know where they start and end.`,
      preview: true,
      html: `<!-- TABLE -->
      <table cellpadding="0" cellspacing="0" border="0" width="100%">
        <tr>
          <td
            style="
              font-family: Arial, sans-serif;
              font-size: 28px;
              line-height: 36px;
              color: #212129;
              padding: 0 0 20px 0;
            "
            class="padding-30-font-24"
            align="left"
          >
            Here's everything you need to know about reloading
          </td>
        </tr>
      </table>
      <table cellpadding="0" cellspacing="0" border="0" width="100%">
        <tr valign="top">
          <td
            align="left"
            style="
              font-family: Arial, sans-serif;
              font-size: 20px;
              color: #212129;
              padding: 20px 0 0 0;
            "
            class="padding-none"
          >
            <table cellpadding="0" cellspacing="0" border="0" width="100%">
              <tr valign="top" bgcolor="#dc1928">
                <td
                  bgcolor="#dc1928"
                  valign="top"
                  width="90"
                  style="width: 90px"
                  class="mobile-hide"
                >
                  &nbsp;
                </td>
                <td bgcolor="#dc1928" width="30" valign="top" style="width: 30px">
                  &nbsp;
                </td>
                <td bgcolor="#dc1928" valign="top">
                  <table cellpadding="0" cellspacing="0" border="0" width="100%">
                    <tr>
                      <td
                        style="
                          font-family: Arial, sans-serif;
                          font-size: 13px;
                          color: #ffffff;
                          padding: 20px 0;
                        "
                        class="padding-10-5"
                      >
                        <table
                          cellpadding="0"
                          cellspacing="0"
                          border="0"
                          width="100%"
                        >
                          <tr>
                            <td
                              style="
                                font-family: Arial, sans-serif;
                                font-size: 13px;
                                color: #ffffff;
                                padding: 0 0 10px 0;
                              "
                            >
                              <img
                                border="0"
                                src="http://images.pinpoint.net.au/product/auspost-amazon-cash.jpg"
                                width="21"
                                height="auto"
                                alt=""
                                style="display: block"
                              />
                            </td>
                          </tr>
                          <tr>
                            <td
                              style="
                                font-family: Arial, sans-serif;
                                font-size: 13px;
                                color: #ffffff;
                              "
                            >
                              <strong>Cash</strong>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                  </table>
                </td>
                <td bgcolor="#dc1928" valign="top">
                  <table cellpadding="0" cellspacing="0" border="0" width="100%">
                    <tr>
                      <td
                        style="
                          font-family: Arial, sans-serif;
                          font-size: 13px;
                          color: #ffffff;
                          padding: 20px 0;
                        "
                        class="padding-10-5"
                      >
                        <table
                          cellpadding="0"
                          cellspacing="0"
                          border="0"
                          width="100%"
                        >
                          <tr>
                            <td
                              style="
                                font-family: Arial, sans-serif;
                                font-size: 13px;
                                color: #ffffff;
                                padding: 0 0 10px 0;
                              "
                            >
                              <img
                                border="0"
                                src="http://images.pinpoint.net.au/product/auspost-amazon-debit.jpg"
                                width="21"
                                height="auto"
                                alt=""
                                style="display: block"
                              />
                            </td>
                          </tr>
                          <tr>
                            <td
                              style="
                                font-family: Arial, sans-serif;
                                font-size: 13px;
                                color: #ffffff;
                              "
                            >
                              <strong
                                >Debit<br />
                                Card</strong
                              >
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                  </table>
                </td>
                <td bgcolor="#dc1928" valign="top">
                  <table cellpadding="0" cellspacing="0" border="0" width="100%">
                    <tr>
                      <td
                        style="
                          font-family: Arial, sans-serif;
                          font-size: 13px;
                          color: #ffffff;
                          padding: 20px 0;
                        "
                        class="padding-10-5"
                      >
                        <table
                          cellpadding="0"
                          cellspacing="0"
                          border="0"
                          width="100%"
                        >
                          <tr>
                            <td
                              style="
                                font-family: Arial, sans-serif;
                                font-size: 13px;
                                color: #ffffff;
                                padding: 0 0 10px 0;
                              "
                            >
                              <img
                                border="0"
                                src="http://images.pinpoint.net.au/product/auspost-amazon-cash.jpg"
                                width="21"
                                height="auto"
                                alt=""
                                style="display: block"
                              />
                            </td>
                          </tr>
                          <tr>
                            <td
                              style="
                                font-family: Arial, sans-serif;
                                font-size: 13px;
                                color: #ffffff;
                              "
                            >
                              <strong
                                >Bank<br />
                                transfer</strong
                              >
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                  </table>
                </td>
                <td bgcolor="#dc1928" valign="top">
                  <table cellpadding="0" cellspacing="0" border="0" width="100%">
                    <tr>
                      <td
                        style="
                          font-family: Arial, sans-serif;
                          font-size: 13px;
                          color: #ffffff;
                          padding: 20px 0;
                        "
                        class="padding-10-5"
                      >
                        <table
                          cellpadding="0"
                          cellspacing="0"
                          border="0"
                          width="100%"
                        >
                          <tr>
                            <td
                              style="
                                font-family: Arial, sans-serif;
                                font-size: 13px;
                                color: #ffffff;
                                padding: 0 0 10px 0;
                              "
                            >
                              <img
                                border="0"
                                src="http://images.pinpoint.net.au/product/auspost-amazon-bpay.jpg"
                                width="21"
                                height="auto"
                                alt=""
                                style="display: block"
                              />
                            </td>
                          </tr>
                          <tr>
                            <td
                              style="
                                font-family: Arial, sans-serif;
                                font-size: 13px;
                                color: #ffffff;
                              "
                            >
                              <strong>Bpay®</strong>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                  </table>
                </td>
                <td bgcolor="#dc1928" width="30" style="width: 30px">&nbsp;</td>
              </tr>
              <tr valign="top">
                <td
                  bgcolor="#e8e8e9"
                  valign="top"
                  width="90"
                  style="width: 90px"
                  class="mobile-hide"
                >
                  <table cellpadding="0" cellspacing="0" border="0" width="100%">
                    <tr>
                      <td
                        style="
                          font-family: Arial, sans-serif;
                          font-size: 12px;
                          color: #212129;
                          padding: 20px 10px;
                        "
                        class="padding-10-5"
                      >
                        How long<br />
                        until it's in<br />
                        my account
                      </td>
                    </tr>
                  </table>
                </td>
                <td
                  bgcolor="#ffffff"
                  width="30"
                  valign="top"
                  style="width: 30px"
                  class="bg-grey"
                >
                  &nbsp;
                </td>
                <td bgcolor="#ffffff" valign="top" class="bg-grey">
                  <table cellpadding="0" cellspacing="0" border="0" width="100%">
                    <tr>
                      <td
                        style="
                          font-family: Arial, sans-serif;
                          font-size: 12px;
                          color: #212129;
                          padding: 20px 0;
                        "
                        class="padding-10-5"
                      >
                        Instantly
                      </td>
                    </tr>
                  </table>
                </td>
                <td bgcolor="#ffffff" valign="top" class="bg-grey">
                  <table cellpadding="0" cellspacing="0" border="0" width="100%">
                    <tr>
                      <td
                        style="
                          font-family: Arial, sans-serif;
                          font-size: 12px;
                          color: #212129;
                          padding: 20px 0;
                        "
                        class="padding-10-5"
                      >
                        Instantly
                      </td>
                    </tr>
                  </table>
                </td>
                <td bgcolor="#ffffff" valign="top" class="bg-grey">
                  <table cellpadding="0" cellspacing="0" border="0" width="100%">
                    <tr>
                      <td
                        style="
                          font-family: Arial, sans-serif;
                          font-size: 12px;
                          color: #212129;
                          padding: 20px 0;
                        "
                        class="padding-10-5"
                      >
                        Up to 1<br />
                        business day<br /><br />
                        <span style="font-size: 11px; color: #76767b"
                          >longer if after<br />
                          2pm AEST<sup>1</sup></span
                        >
                      </td>
                    </tr>
                  </table>
                </td>
                <td bgcolor="#ffffff" valign="top" class="bg-grey">
                  <table cellpadding="0" cellspacing="0" border="0" width="100%">
                    <tr>
                      <td
                        style="
                          font-family: Arial, sans-serif;
                          font-size: 12px;
                          color: #212129;
                          padding: 20px 0;
                        "
                        class="padding-10-5"
                      >
                        Estimated 2-3<br />
                        business day<br /><br />
                        <span style="font-size: 11px; color: #76767b"
                          >longer if after<br />
                          2pm AEST<sup>1</sup></span
                        >
                      </td>
                    </tr>
                  </table>
                </td>
                <td bgcolor="#ffffff" class="bg-grey" width="30" style="width: 30px">
                  &nbsp;
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
      <!-- /TABLE -->`
    }
  },
  {
    id: 18,
    name: `tips`,
    type: `other`,
    path: `/other/tips`,
    data: {
      heading: `Tips`,
      tag: `Now that the core modules are set up, we can add optional modules.`,
      instructions: `Place all optional modules inside of the body module. Use the comments in the code to seperate each block and know where they start and end.`,
      preview: true,
      html: `<!-- TIPS -->
      <table border="0" cellpadding="0" cellspacing="0" width="100%">
        <tr valign="top">
          <td class="padding-15">
            <table border="0" cellpadding="0" cellspacing="0" width="100%">
              <tr valign="top">
                <td width="22" style="width: 22px" valign="top">
                  <img
                    border="0"
                    src="http://images.pinpoint.net.au/product/auspost-bulb.png"
                    width="22"
                    height="22"
                    alt=""
                    style="display: block"
                  />
                </td>
                <td
                  valign="top"
                  style="
                    color: #4d4d54;
                    font-family: Arial, sans-serif;
                    font-size: 16px;
                    letter-spacing: 0;
                    line-height: 24px;
                    padding: 3px 12px 0 12px;
                  "
                >
                  You can save your Everyday Mastercard to your devices and favourite
                  shops to make future buys even easier.
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
      <!-- /TIPS -->`
    }
  },
  {
    id: 19,
    name: `currency`,
    type: `other`,
    path: `/other/currency`,
    data: {
      heading: `Currency`,
      tag: `Now that the core modules are set up, we can add optional modules.`,
      instructions: `Place all optional modules inside of the body module. Use the comments in the code to seperate each block and know where they start and end.`,
      preview: true,
      html: `<!-- CURRENCY -->
      <table
        cellpadding="1"
        cellspacing="0"
        border="0"
        width="100%"
        bgcolor="#e2e2e2"
      >
        <tr>
          <td>
            <table
              cellpadding="0"
              cellspacing="0"
              border="0"
              width="100%"
              bgcolor="#ffffff"
            >
              <tr>
                <td style="padding: 50px 30px 25px" class="padding-30">
                  <table cellpadding="0" cellspacing="0" border="0" width="100%">
                    <tr>
                      <td
                        style="
                          font-family: Arial, sans-serif;
                          font-size: 12px;
                          line-height: 16px;
                          color: #212129;
                          padding: 0 0 5px 0;
                        "
                      >
                        CURRENCY
                      </td>
                    </tr>
                    <tr>
                      <td
                        align="left"
                        style="
                          font-family: Arial, sans-serif;
                          font-size: 30px;
                          color: #212129;
                        "
                      >
                        Foreign currencies to shop with
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
            <table
              cellpadding="0"
              cellspacing="0"
              border="0"
              width="100%"
              bgcolor="#ffffff"
            >
              <tr>
                <td
                  align="left"
                  style="
                    font-family: Arial, sans-serif;
                    font-size: 16px;
                    line-height: 24px;
                    color: #4d4d54;
                    padding: 0 30px 35px 30px;
                  "
                  class="padding-10-30-10"
                >
                  You can easily load or move funds between these currencies using
                  <a
                    href="https://everyday.card.auspost/login"
                    style="color: #dc1928; text-decoration: underline"
                    >My&nbsp;Account</a
                  >
                  online or through the
                  <a
                    href="https://auspost.com.au/money-insurance/prepaid-cards/everyday-mastercard"
                    style="color: #dc1928; text-decoration: underline"
                    >Everyday Mastercard App</a
                  >.
                </td>
              </tr>
            </table>
            <table
              cellpadding="0"
              cellspacing="0"
              border="0"
              width="100%"
              bgcolor="#ffffff"
            >
              <tr>
                <td
                  align="center"
                  style="padding: 15px 30px 50px 30px"
                  class="padding-10-30-10"
                >
                  <!--[if gte mso 9]>
                      <table cellpadding="0" cellspacing="0" border="0" width="100%">
                      <tr>
                      <td align="left" valign="top">
                  <![endif]-->

                  <table
                    align="left"
                    border="0"
                    cellpadding="0"
                    cellspacing="0"
                    class="width-100"
                    style="width: 245px"
                    width="245"
                  >
                    <tr>
                      <td align="left">
                        <table
                          cellpadding="0"
                          cellspacing="0"
                          border="0"
                          width="100%"
                        >
                          <tr>
                            <td
                              width="22"
                              style="
                                font-family: Arial, sans-serif;
                                font-size: 12px;
                                line-height: 16px;
                                color: #dc1928;
                                font-weight: bold;
                                padding: 0 0 25px 0;
                              "
                            >
                              <img
                                src="https://cdn.pinpoint.net.au/product/auspost-icon-aus.png"
                                width="22"
                                height="22"
                                border="0"
                                style="display: block"
                                alt=""
                              />
                            </td>
                            <td
                              style="
                                font-family: Arial, sans-serif;
                                font-size: 12px;
                                line-height: 16px;
                                color: #212129;
                                padding: 0 0 25px 8px;
                              "
                            >
                              <span
                                style="
                                  font-family: Arial, sans-serif;
                                  font-size: 12px;
                                  line-height: 16px;
                                  color: #dc1928;
                                  font-weight: bold;
                                "
                                >$</span
                              >
                              &nbsp;Australian Dollars (AUD)
                            </td>
                          </tr>
                          <tr>
                            <td
                              width="22"
                              style="
                                font-family: Arial, sans-serif;
                                font-size: 12px;
                                line-height: 16px;
                                color: #dc1928;
                                font-weight: bold;
                                padding: 0 0 25px 0;
                              "
                            >
                              <img
                                src="https://cdn.pinpoint.net.au/product/auspost-icon-eu.png"
                                width="22"
                                height="22"
                                border="0"
                                style="display: block"
                                alt=""
                              />
                            </td>
                            <td
                              style="
                                font-family: Arial, sans-serif;
                                font-size: 12px;
                                line-height: 16px;
                                color: #212129;
                                padding: 0 0 25px 8px;
                              "
                            >
                              <span
                                style="
                                  font-family: Arial, sans-serif;
                                  font-size: 12px;
                                  line-height: 16px;
                                  color: #dc1928;
                                  font-weight: bold;
                                "
                                >&euro;</span
                              >
                              &nbsp;Euros (EUR)
                            </td>
                          </tr>
                          <tr>
                            <td
                              width="22"
                              style="
                                font-family: Arial, sans-serif;
                                font-size: 12px;
                                line-height: 16px;
                                color: #dc1928;
                                font-weight: bold;
                                padding: 0 0 25px 0;
                              "
                            >
                              <img
                                src="https://cdn.pinpoint.net.au/product/auspost-icon-gb.png"
                                width="22"
                                height="22"
                                border="0"
                                style="display: block"
                                alt=""
                              />
                            </td>
                            <td
                              style="
                                font-family: Arial, sans-serif;
                                font-size: 12px;
                                line-height: 16px;
                                color: #212129;
                                padding: 0 0 25px 8px;
                              "
                            >
                              <span
                                style="
                                  font-family: Arial, sans-serif;
                                  font-size: 12px;
                                  line-height: 16px;
                                  color: #dc1928;
                                  font-weight: bold;
                                "
                                >&#163;</span
                              >
                              &nbsp;Pound Sterling (GBP)
                            </td>
                          </tr>
                          <tr>
                            <td
                              width="22"
                              style="
                                font-family: Arial, sans-serif;
                                font-size: 12px;
                                line-height: 16px;
                                color: #dc1928;
                                font-weight: bold;
                                padding: 0 0 25px 0;
                              "
                            >
                              <img
                                src="https://cdn.pinpoint.net.au/product/auspost-icon-nz.png"
                                width="22"
                                height="22"
                                border="0"
                                style="display: block"
                                alt=""
                              />
                            </td>
                            <td
                              style="
                                font-family: Arial, sans-serif;
                                font-size: 12px;
                                line-height: 16px;
                                color: #212129;
                                padding: 0 0 25px 8px;
                              "
                            >
                              <span
                                style="
                                  font-family: Arial, sans-serif;
                                  font-size: 12px;
                                  line-height: 16px;
                                  color: #dc1928;
                                  font-weight: bold;
                                "
                                >$</span
                              >
                              &nbsp;New Zealand Dollars (NZD)
                            </td>
                          </tr>
                          <tr>
                            <td
                              width="22"
                              style="
                                font-family: Arial, sans-serif;
                                font-size: 12px;
                                line-height: 16px;
                                color: #dc1928;
                                font-weight: bold;
                                padding: 0 0 25px 0;
                              "
                            >
                              <img
                                src="https://cdn.pinpoint.net.au/product/auspost-icon-hk.png"
                                width="22"
                                height="22"
                                border="0"
                                style="display: block"
                                alt=""
                              />
                            </td>
                            <td
                              style="
                                font-family: Arial, sans-serif;
                                font-size: 12px;
                                line-height: 16px;
                                color: #212129;
                                padding: 0 0 25px 8px;
                              "
                            >
                              <span
                                style="
                                  font-family: Arial, sans-serif;
                                  font-size: 12px;
                                  line-height: 16px;
                                  color: #dc1928;
                                  font-weight: bold;
                                "
                                >HK$</span
                              >
                              &nbsp;Hong Kong Dollars (HKD)
                            </td>
                          </tr>
                          <tr>
                            <td
                              width="22"
                              style="
                                font-family: Arial, sans-serif;
                                font-size: 12px;
                                line-height: 16px;
                                color: #dc1928;
                                font-weight: bold;
                              "
                              class="padding-currency1"
                            >
                              <img
                                src="https://cdn.pinpoint.net.au/product/auspost-icon-uae.png"
                                width="22"
                                height="22"
                                border="0"
                                style="display: block"
                                alt=""
                              />
                            </td>
                            <td
                              style="
                                font-family: Arial, sans-serif;
                                font-size: 12px;
                                line-height: 16px;
                                color: #212129;
                                padding: 0 0 0 8px;
                              "
                              class="padding-currency2"
                            >
                              <span
                                style="
                                  font-family: Arial, sans-serif;
                                  font-size: 12px;
                                  line-height: 16px;
                                  color: #dc1928;
                                  font-weight: bold;
                                "
                                >&#x62f;&#x2e;&#x625;</span
                              >
                              &nbsp;United Arab Emirates Dollars (AED)
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                  </table>

                  <!--[if gte mso 9]>
                      </td>
                      <td align="left" valign="top">
                  <![endif]-->

                  <table
                    align="right"
                    border="0"
                    cellpadding="0"
                    cellspacing="0"
                    class="width-100"
                    style="width: 245px"
                    width="245"
                  >
                    <tr>
                      <td align="right">
                        <table
                          cellpadding="0"
                          cellspacing="0"
                          border="0"
                          width="100%"
                        >
                          <tr>
                            <td
                              width="22"
                              style="
                                font-family: Arial, sans-serif;
                                font-size: 12px;
                                line-height: 16px;
                                color: #dc1928;
                                font-weight: bold;
                                padding: 0 0 25px 0;
                              "
                            >
                              <img
                                src="https://cdn.pinpoint.net.au/product/auspost-icon-us.png"
                                width="22"
                                height="22"
                                border="0"
                                style="display: block"
                                alt=""
                              />
                            </td>
                            <td
                              style="
                                font-family: Arial, sans-serif;
                                font-size: 12px;
                                line-height: 16px;
                                color: #212129;
                                padding: 0 0 25px 8px;
                              "
                            >
                              <span
                                style="
                                  font-family: Arial, sans-serif;
                                  font-size: 12px;
                                  line-height: 16px;
                                  color: #dc1928;
                                  font-weight: bold;
                                "
                                >$</span
                              >
                              &nbsp;United States Dollars (USD)
                            </td>
                          </tr>
                          <tr>
                            <td
                              width="22"
                              style="
                                font-family: Arial, sans-serif;
                                font-size: 12px;
                                line-height: 16px;
                                color: #dc1928;
                                font-weight: bold;
                                padding: 0 0 25px 0;
                              "
                            >
                              <img
                                src="https://cdn.pinpoint.net.au/product/auspost-icon-japan.png"
                                width="22"
                                height="22"
                                border="0"
                                style="display: block"
                                alt=""
                              />
                            </td>
                            <td
                              style="
                                font-family: Arial, sans-serif;
                                font-size: 12px;
                                line-height: 16px;
                                color: #212129;
                                padding: 0 0 25px 8px;
                              "
                            >
                              <span
                                style="
                                  font-family: Arial, sans-serif;
                                  font-size: 12px;
                                  line-height: 16px;
                                  color: #dc1928;
                                  font-weight: bold;
                                "
                                >&#165;</span
                              >
                              &nbsp;Japanese Yen (JPY)
                            </td>
                          </tr>
                          <tr>
                            <td
                              width="22"
                              style="
                                font-family: Arial, sans-serif;
                                font-size: 12px;
                                line-height: 16px;
                                color: #dc1928;
                                font-weight: bold;
                                padding: 0 0 25px 0;
                              "
                            >
                              <img
                                src="https://cdn.pinpoint.net.au/product/auspost-icon-ca.png"
                                width="22"
                                height="22"
                                border="0"
                                style="display: block"
                                alt=""
                              />
                            </td>

                            <td
                              style="
                                font-family: Arial, sans-serif;
                                font-size: 12px;
                                line-height: 16px;
                                color: #212129;
                                padding: 0 0 25px 8px;
                              "
                            >
                              <span
                                style="
                                  font-family: Arial, sans-serif;
                                  font-size: 12px;
                                  line-height: 16px;
                                  color: #dc1928;
                                  font-weight: bold;
                                "
                                >C$</span
                              >
                              &nbsp;Canadian Dollar (CAD)
                            </td>
                          </tr>
                          <tr>
                            <td
                              width="22"
                              style="
                                font-family: Arial, sans-serif;
                                font-size: 12px;
                                line-height: 16px;
                                color: #dc1928;
                                font-weight: bold;
                                padding: 0 0 25px 0;
                              "
                            >
                              <img
                                src="https://cdn.pinpoint.net.au/product/auspost-icon-th.png"
                                width="22"
                                height="22"
                                border="0"
                                style="display: block"
                                alt=""
                              />
                            </td>
                            <td
                              style="
                                font-family: Arial, sans-serif;
                                font-size: 12px;
                                line-height: 16px;
                                color: #212129;
                                padding: 0 0 25px 8px;
                              "
                            >
                              <span
                                style="
                                  font-family: Arial, sans-serif;
                                  font-size: 12px;
                                  line-height: 16px;
                                  color: #dc1928;
                                  font-weight: bold;
                                "
                                >&#3647;</span
                              >
                              &nbsp;Thai Baht
                            </td>
                          </tr>
                          <tr>
                            <td
                              width="22"
                              style="
                                font-family: Arial, sans-serif;
                                font-size: 12px;
                                line-height: 16px;
                                color: #dc1928;
                                font-weight: bold;
                                padding: 0 0 25px 0;
                              "
                            >
                              <img
                                src="https://cdn.pinpoint.net.au/product/auspost-icon-sin.png"
                                width="22"
                                height="22"
                                border="0"
                                style="display: block"
                                alt=""
                              />
                            </td>
                            <td
                              style="
                                font-family: Arial, sans-serif;
                                font-size: 12px;
                                line-height: 16px;
                                color: #212129;
                                padding: 0 0 25px 8px;
                              "
                            >
                              <span
                                style="
                                  font-family: Arial, sans-serif;
                                  font-size: 12px;
                                  line-height: 16px;
                                  color: #dc1928;
                                  font-weight: bold;
                                "
                                >S$</span
                              >
                              &nbsp;Singapore Dollars (SGD)
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                  </table>

                  <!--[if gte mso 9]>
                      </td>
                      </tr>
                      </table>
                  <![endif]-->
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
      <!-- /CURRENCY -->`
    }
  },
  {
    id: 20,
    name: `digitalWallet`,
    type: `other`,
    path: `/other/digital-wallet`,
    data: {
      heading: `Digital Wallet`,
      tag: `Now that the core modules are set up, we can add optional modules.`,
      instructions: `Place all optional modules inside of the body module. Use the comments in the code to seperate each block and know where they start and end.`,
      preview: true,
      html: `<!-- DIGITAL WALLET -->
      <table
        cellpadding="0"
        cellspacing="0"
        border="0"
        width="100%"
        bgcolor="#31313D"
      >
        <tr>
          <td
            style="
              font-family: Arial, sans-serif;
              font-size: 16px;
              color: #ffffff;
              padding: 40px;
            "
          >
            <table cellpadding="0" cellspacing="0" border="0" width="100%">
              <tr valign="top">
                <td width="20" valign="top">
                  <img
                    src="https://cdn.pinpoint.net.au/product/auspost-usage-digitalwallet.jpg"
                    width="22"
                    height="auto"
                    border="0"
                    style="display: block"
                    alt=""
                  />
                </td>
                <td
                  valign="top"
                  style="
                    font-family: Arial, sans-serif;
                    font-size: 16px;
                    line-height: 22px;
                    color: #ffffff;
                    padding: 6px 0 0 15px;
                  "
                >
                  <table border="0" cellpadding="0" cellspacing="0" width="100%">
                    <tr>
                      <td
                        style="
                          font-family: Arial, sans-serif;
                          font-size: 22px;
                          line-height: 22px;
                          color: #ffffff;
                        "
                      >
                        Use your digital wallet to pay
                      </td>
                    </tr>
                    <tr>
                      <td
                        height="10"
                        style="line-height: 10px; height: 10px; font-size: 0px"
                      >
                        <img
                          border="0"
                          src="http://images.pinpoint.net.au/product/wl_space.gif"
                          width="1"
                          height="1"
                          alt=""
                          style="display: block"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td
                        style="
                          font-family: Arial, sans-serif;
                          font-size: 16px;
                          line-height: 22px;
                          color: #ffffff;
                          padding: 0 0 25px 0;
                        "
                      >
                        Load your card to your digital wallet via Google Pay or
                        Samsung Pay<sup>5</sup>
                        instantly so you can start making purchases.
                      </td>
                    </tr>
                  </table>

                  <table border="0" cellpadding="0" cellspacing="0">
                    <tr>
                      <td width="63" style="width: 63px">
                        <img
                          border="0"
                          src="http://images.pinpoint.net.au/product/auspost-googlepay.jpg"
                          width="63"
                          height="auto"
                          alt=""
                          style="display: block"
                        />
                      </td>
                      <td width="30" style="width: 30px">&nbsp;</td>
                      <td width="194" style="width: 194px">
                        <img
                          border="0"
                          src="http://images.pinpoint.net.au/product/auspost-samsungpay.jpg"
                          width="144"
                          height="auto"
                          alt=""
                          style="display: block"
                        />
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
      <!-- /DIGITAL WALLET -->`
    }
  },
  {
    id: 21,
    name: `needHelpNavy`,
    type: `other`,
    path: `/other/need-help-navy`,
    data: {
      heading: `Need Help - Navy`,
      tag: `Now that the core modules are set up, we can add optional modules.`,
      instructions: `Place all optional modules inside of the body module. Use the comments in the code to seperate each block and know where they start and end.`,
      preview: true,
      html: `<!-- NEED HELP NAVY -->
      <table
        cellpadding="0"
        cellspacing="0"
        border="0"
        width="100%"
        bgcolor="#31313D"
      >
        <tr>
          <td
            style="
              font-family: Arial, sans-serif;
              font-size: 16px;
              color: #ffffff;
              padding: 40px;
            "
            class="padding-30"
          >
            <table cellpadding="0" cellspacing="0" border="0" width="100%">
              <tr>
                <td width="20">
                  <img
                    src="https://cdn.pinpoint.net.au/product/auspost-christmas-help.jpg"
                    width="22"
                    height="auto"
                    border="0"
                    style="display: block"
                    alt=""
                  />
                </td>
                <td
                  style="
                    font-family: Arial, sans-serif;
                    font-size: 16px;
                    line-height: 22px;
                    color: #ffffff;
                    padding: 0 0 0 15px;
                  "
                >
                  <a
                    href="https://auspost.com.au/money-insurance/prepaid-cards/everyday-mastercard#tab4"
                    style="text-decoration: none; color: #ffffff"
                  >
                    <strong>Need help?</strong>
                    <table border="0" cellpadding="0" cellspacing="0" width="100%">
                      <tr>
                        <td
                          height="10"
                          style="line-height: 10px; height: 10px; font-size: 0px"
                        >
                          <img
                            border="0"
                            src="http://images.pinpoint.net.au/product/wl_space.gif"
                            width="1"
                            height="1"
                            alt=""
                            style="display: block"
                          />
                        </td>
                      </tr>
                    </table>
                    Find answers to our most frequently asked questions.
                  </a>
                </td>
                <td width="20">
                  <a
                    href="https://auspost.com.au/money-insurance/prepaid-cards/everyday-mastercard#tab4"
                  >
                    <img
                      src="https://cdn.pinpoint.net.au/product/auspost-christmas-arrow-big.jpg"
                      width="20"
                      height="auto"
                      border="0"
                      style="display: block"
                      alt=""
                    />
                  </a>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
      <table border="0" cellpadding="0" cellspacing="0" width="100%">
        <tr>
          <td
            style="
              color: #4d4d54;
              font-family: Arial, sans-serif;
              font-size: 12px;
              letter-spacing: 0;
              line-height: 16px;
              padding: 20px 0 0 0;
            "
            class="padding-30"
          >
            Looking for more information about your Everyday Mastercard? Visit
            <a
              href="https://auspost.com.au/money-insurance/prepaid-cards/everyday-mastercard"
              style="color: #4d4d54; text-decoration: underline"
              >auspost.com.au/everydaycard</a
            >
          </td>
        </tr>
      </table>
      <!-- /NEED HELP NAVY -->`
    }
  },
  {
    id: 22,
    name: `needHelpRed`,
    type: `other`,
    path: `/other/need-help-red`,
    data: {
      heading: `Need Help - Red`,
      tag: `Now that the core modules are set up, we can add optional modules.`,
      instructions: `Place all optional modules inside of the body module. Use the comments in the code to seperate each block and know where they start and end.`,
      preview: true,
      html: `<!-- NEED HELP RED -->
      <table
        cellpadding="0"
        cellspacing="0"
        border="0"
        width="100%"
        bgcolor="#dc1928"
      >
        <tr>
          <td
            style="
              font-family: Arial, sans-serif;
              font-size: 16px;
              color: #ffffff;
              padding: 40px;
            "
          >
            <table cellpadding="0" cellspacing="0" border="0" width="100%">
              <tr>
                <td width="20">
                  <img
                    src="https://cdn.pinpoint.net.au/product/auspost-industry-help.jpg"
                    width="22"
                    height="auto"
                    border="0"
                    style="display: block"
                    alt=""
                  />
                </td>
                <td
                  style="
                    font-family: Arial, sans-serif;
                    font-size: 16px;
                    line-height: 22px;
                    color: #ffffff;
                    padding: 0 0 0 15px;
                  "
                >
                  <a
                    href="https://auspost.com.au/money-insurance/prepaid-cards/everyday-mastercard#tab4"
                    style="text-decoration: none; color: #ffffff"
                  >
                    <strong>Need help?</strong>
                    <table border="0" cellpadding="0" cellspacing="0" width="100%">
                      <tr>
                        <td
                          height="10"
                          style="line-height: 10px; height: 10px; font-size: 0px"
                        >
                          <img
                            border="0"
                            src="http://images.pinpoint.net.au/product/wl_space.gif"
                            width="1"
                            height="1"
                            alt=""
                            style="display: block"
                          />
                        </td>
                      </tr>
                    </table>
                    Find answers to our most frequently asked questions.
                  </a>
                </td>
                <td width="20">
                  <a
                    href="https://auspost.com.au/money-insurance/prepaid-cards/everyday-mastercard#tab4"
                    target="_blank"
                  >
                    <img
                      src="https://cdn.pinpoint.net.au/product/auspost-industry-arrow-big.jpg"
                      width="20"
                      height="auto"
                      border="0"
                      style="display: block"
                      alt=""
                    />
                  </a>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
      <table border="0" cellpadding="0" cellspacing="0" width="100%">
        <tr>
          <td
            style="
              color: #4d4d54;
              font-family: Arial, sans-serif;
              font-size: 12px;
              letter-spacing: 0;
              line-height: 16px;
              padding: 20px 0 0 0;
            "
            class="padding-30"
          >
            Looking for more information about your Everyday Mastercard? Visit
            <a
              href="https://auspost.com.au/money-insurance/prepaid-cards/everyday-mastercard"
              target="_blank"
              style="color: #4d4d54; text-decoration: underline"
              >auspost.com.au/everydaycard</a
            >
          </td>
        </tr>
      </table>
      <!-- /NEED HELP RED -->`
    }
  },
  {
    id: 23,
    name: `appIcons`,
    type: `utility`,
    path: `/utility/app-icons`,
    data: {
      heading: `App Icons`,
      tag: `Now that the core modules are set up, we can add optional modules.`,
      instructions: `Place all optional modules inside of the body module. Use the comments in the code to seperate each block and know where they start and end.`,
      preview: true,
      html: `<!-- APP ICONS -->
      <table
        cellpadding="0"
        cellspacing="0"
        border="0"
        width="100%"
        bgcolor="#ffffff"
      >
        <tr>
          <td style="padding: 30px 0 0 0">
            <a
              href="https://apps.apple.com/au/app/everyday/id1465684338"
              target="_blank"
            >
              <img
                src="https://cdn.pinpoint.net.au/product/auspost-appstore.jpg"
                width="132"
                height="auto"
                border="0"
                style="display: block; width: 132px"
                alt="App store"
              />
            </a>
          </td>
        </tr>
        <tr>
          <td style="padding: 15px 0 0 0">
            <a
              href="https://play.google.com/store/apps/details?id=au.com.auspost.cashpassport"
              target="_blank"
            >
              <img
                src="https://cdn.pinpoint.net.au/product/auspost-googleplay.jpg"
                width="132"
                height="auto"
                border="0"
                style="display: block; width: 132px"
                alt="Google play"
              />
            </a>
          </td>
        </tr>
      </table>
<!-- /APP ICONS -->`
    }
  },
  {
    id: 24,
    name: `primaryCTA`,
    type: `utility`,
    path: `/utility/primary-cta`,
    data: {
      heading: `Primary CTA`,
      tag: `Now that the core modules are set up, we can add optional modules.`,
      instructions: `Place all optional modules inside of the body module. Use the comments in the code to seperate each block and know where they start and end.`,
      preview: true,
      html: `<!-- /PRIMARY CTA -->
<div>
  <!--[if mso]>
    <v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="https://everyday.card.auspost/login" style="height:45px;v-text-anchor:middle;width:145px;" arcsize="14%" stroke="f" fillcolor="#dc1928">
        <w:anchorlock/>
        <center>
    <![endif]-->
  <a
    href="https://everyday.card.auspost/login"
    target="_blank"
    style="
      background-color: #dc1928;
      border-radius: 6px;
      color: #ffffff;
      display: inline-block;
      font-family: sans-serif;
      font-size: 15px;
      line-height: 45px;
      text-align: center;
      text-decoration: none;
      width: 145px;
      -webkit-text-size-adjust: none;
    "
    >Load now</a
  >
  <!--[if mso]>
      </center>
  </v:roundrect>
  <![endif]-->
</div>
<!-- /PRIMARY CTA -->`
    }
  },
  {
    id: 25,
    name: `secondaryCTA`,
    type: `utility`,
    path: `/utility/secondary-cta`,
    data: {
      heading: `Secondary CTA`,
      tag: `Now that the core modules are set up, we can add optional modules.`,
      instructions: `Place all optional modules inside of the body module. Use the comments in the code to seperate each block and know where they start and end.`,
      preview: true,
      html: `<!-- /SECNDARY CTA -->
<div>
  <!--[if mso]>
    <v:roundrect
      xmlns:v="urn:schemas-microsoft-com:vml"
      xmlns:w="urn:schemas-microsoft-com:office:word"
      href="https://everyday.card.auspost/login"
      style="height: 45px; v-text-anchor: middle; width: 145px"
      arcsize="14%"
      strokecolor="#dc1928"
      fillcolor="#ffffff"
    >
      <w:anchorlock />
      <center
        style="
          color: #dc1928;
          font-family: sans-serif;
          font-size: 13px;
          font-weight: bold;
        "
      >
        Load now
      </center>
    </v:roundrect> <!
  [endif]--><a
    href="https://everyday.card.auspost/login"
    style="
      background-color: #ffffff;
      border: 1px solid #dc1928;
      border-radius: 6px;
      color: #dc1928;
      display: inline-block;
      font-family: sans-serif;
      font-size: 15px;
      font-weight: bold;
      line-height: 45px;
      text-align: center;
      text-decoration: none;
      width: 145px;
      -webkit-text-size-adjust: none;
      mso-hide: all;
    "
    class="width-100"
    >Load now</a
  >
</div>
<!-- /SECONDARY CTA -->`
    }
  },
  {
    id: 26,
    name: `dualCTA`,
    type: `utility`,
    path: `/utility/dual-cta`,
    data: {
      heading: `Dual CTA`,
      tag: `Now that the core modules are set up, we can add optional modules.`,
      instructions: `Place all optional modules inside of the body module. Use the comments in the code to seperate each block and know where they start and end.`,
      preview: true,
      html: `<!-- CTAs -->
      <table
        cellpadding="0"
        cellspacing="0"
        border="0"
        style="margin: 0 auto"
        align="center"
      >
        <tr>
          <td align="center" class="padding-30-15">
            <!--[if gte mso 9]>
                <table cellpadding="0" cellspacing="0" border="0" width="100%">
                <tr>
                <td align="left" valign="top">
            <![endif]-->

            <table
              cellpadding="0"
              cellspacing="0"
              border="0"
              width="230"
              style="width: 230px"
              align="left"
              class="width-100"
            >
              <tr>
                <td align="center" style="padding: 0 20px 0 0" class="padding-none">
                  <!-- CTA -->
                  <div>
                    <!--[if mso]>
                      <v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="https://everyday.card.auspost/login" style="height:45px;v-text-anchor:middle;width:210px;" arcsize="14%" stroke="f" fillcolor="#dc1928">
                          <w:anchorlock/>
                          <center>
                      <![endif]-->
                    <a
                      href="https://everyday.card.auspost/login"
                      style="
                        background-color: #dc1928;
                        border-radius: 6px;
                        color: #ffffff;
                        display: inline-block;
                        font-family: sans-serif;
                        font-size: 15px;
                        line-height: 45px;
                        text-align: center;
                        text-decoration: none;
                        width: 210px;
                        -webkit-text-size-adjust: none;
                      "
                      class="width-100"
                      >Reload via My Account</a
                    >
                    <!--[if mso]>
                        </center>
                    </v:roundrect>
                    <![endif]-->
                  </div>
                  <!-- /CTA -->
                </td>
              </tr>
            </table>

            <!--[if gte mso 9]>
                </td>
                <td align="left" valign="top">
            <![endif]-->

            <table
              cellpadding="0"
              cellspacing="0"
              border="0"
              width="330"
              style="width: 330px"
              align="left"
              class="width-100-margin-10"
            >
              <tr>
                <td align="center">
                  <!-- CTA -->
                  <div>
                    <!--[if mso]>
                      <v:roundrect
                        xmlns:v="urn:schemas-microsoft-com:vml"
                        xmlns:w="urn:schemas-microsoft-com:office:word"
                        href="https://auspost.com.au/locate/?services=32"
                        style="height: 45px; v-text-anchor: middle; width: 330px"
                        arcsize="14%"
                        strokecolor="#dc1928"
                        fillcolor="#ffffff"
                      >
                        <w:anchorlock />
                        <center
                          style="
                            color: #dc1928;
                            font-family: sans-serif;
                            font-size: 13px;
                            font-weight: bold;
                          "
                        >
                          Load now
                        </center>
                      </v:roundrect> <!
                    [endif]--><a
                      href="https://auspost.com.au/locate/?services=32"
                      style="
                        background-color: #ffffff;
                        border: 1px solid #dc1928;
                        border-radius: 6px;
                        color: #dc1928;
                        display: inline-block;
                        font-family: sans-serif;
                        font-size: 15px;
                        font-weight: bold;
                        line-height: 45px;
                        text-align: center;
                        text-decoration: none;
                        width: 330px;
                        -webkit-text-size-adjust: none;
                        mso-hide: all;
                      "
                      class="width-100"
                      >Find a participating Post Office to reload</a
                    >
                  </div>
                </td>
              </tr>
            </table>

            <!--[if gte mso 9]>
                </td>
                </tr>
                </table>
            <![endif]-->
          </td>
        </tr>
      </table>
      <!-- /CTAs -->`
    }
  },
  {
    id: 27,
    name: `preHeader`,
    type: `utility`,
    path: `/utility/pre-header`,
    data: {
      heading: `Pre-Header`,
      tag: `Now that the core modules are set up, we can add optional modules.`,
      instructions: `Place all optional modules inside of the body module. Use the comments in the code to seperate each block and know where they start and end.`,
      preview: true,
      html: `<!-- PRE-HEADER -->
<div
  style="
    display: none;
    font-size: 1px;
    color: #212129;
    line-height: 1px;
    font-family: Arial, Helvetica, sans-serif;
    max-height: 0px;
    max-width: 0px;
    opacity: 0;
    overflow: hidden;
    mso-hide: all;
  "
></div>
<!-- /PRE-HEADER -->`
    }
  },
  {
    id: 28,
    name: `spacer30`,
    type: `formatting`,
    path: `/formatting/spacer-30`,
    data: {
      heading: `Spacer - 30`,
      tag: `Now that the core modules are set up, we can add optional modules.`,
      instructions: `Place all optional modules inside of the body module. Use the comments in the code to seperate each block and know where they start and end.`,
      preview: false,
      html: `<!-- SPACER 30 -->
      <table
        border="0"
        cellpadding="0"
        cellspacing="0"
        width="100%"
        class="mobile-hide"
      >
        <tr>
          <td height="30" style="line-height: 30px; height: 30px; font-size: 0px">
            <img
              border="0"
              src="http://images.pinpoint.net.au/product/wl_space.gif"
              width="1"
              height="1"
              alt=""
              style="display: block"
            />
          </td>
        </tr>
      </table>
      <!-- /SPACER 30 -->`
    }
  },
  {
    id: 29,
    name: `spacer20`,
    type: `formatting`,
    path: `/formatting/spacer-20`,
    data: {
      heading: `Spacer - 20`,
      tag: `Now that the core modules are set up, we can add optional modules.`,
      instructions: `Place all optional modules inside of the body module. Use the comments in the code to seperate each block and know where they start and end.`,
      preview: false,
      html: `<!-- SPACER 20 -->
      <table
        border="0"
        cellpadding="0"
        cellspacing="0"
        width="100%"
        class="mobile-hide"
      >
        <tr>
          <td height="20" style="line-height: 20px; height: 20px; font-size: 0px">
            <img
              border="0"
              src="http://images.pinpoint.net.au/product/wl_space.gif"
              width="1"
              height="1"
              alt=""
              style="display: block"
            />
          </td>
        </tr>
      </table>
      <!-- /SPACER 20 -->`
    }
  },
  {
    id: 30,
    name: `spacer10`,
    type: `formatting`,
    path: `/formatting/spacer-10`,
    data: {
      heading: `Spacer - 10`,
      tag: `Now that the core modules are set up, we can add optional modules.`,
      instructions: `Place all optional modules inside of the body module. Use the comments in the code to seperate each block and know where they start and end.`,
      preview: false,
      html: `<!-- SPACER 10 -->
      <table
        border="0"
        cellpadding="0"
        cellspacing="0"
        width="100%"
        class="mobile-hide"
      >
        <tr>
          <td height="10" style="line-height: 10px; height: 10px; font-size: 0px">
            <img
              border="0"
              src="http://images.pinpoint.net.au/product/wl_space.gif"
              width="1"
              height="1"
              alt=""
              style="display: block"
            />
          </td>
        </tr>
      </table>
      <!-- /SPACER 10 -->`
    }
  }
]

export default modules
