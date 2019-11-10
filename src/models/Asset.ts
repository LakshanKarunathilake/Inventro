export interface Asset {
  id?: string;
  assetId: string;
  assetcategory: string;
  brandName: string;
  boughtCompanyName: string;
  boughtCompanyAddress: string;
  location: string;
  companyContact: string;
  buyingPrice: string;
  warrantyStatus: string;
  boughtDate: string;
  description: string;
  yrs: string;
  months: string;
  quantity: number;
  displaySize?: string;
  ram?: string;
  capacity?: string;
  categoryTypes?: string;
  processor?: string;
  broken?: string;
}
