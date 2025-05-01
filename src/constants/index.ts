export class ROUTES {
  static LANDINGPAGE = "/";

  static BPO = "/bpo";
  static DIGITALSOLUTIONS = "/digitalSolutions";
  static CONTACT = "/contact";

  // DIGITAL SOLUTIONS SUB ROUTES
  static WEBDEVELOPMENT = this.DIGITALSOLUTIONS + "/webDevelopment";
  static MOBILEDEVELOPMENT = this.DIGITALSOLUTIONS + "/mobileDevelopment";
  static  DIGIALMARKETING = this.DIGITALSOLUTIONS + "/digitalMarketing";

  // BPO SUB ROUTES
  static SALES = this.BPO + "/sales";
  static CUSTOMERSUPPORT = this.BPO + "/customerSupport";
}
