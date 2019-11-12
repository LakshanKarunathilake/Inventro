export interface BookAsset {
  username: string;
  beginDate: string;
  dueDate: string;
  id?: string;
  assetId: string;
  description?: string;
  assetcategory: string;
  requestedNic: string;
  notificationType?: string;
  requestMadeDate: string;
  requestType?: string;
  dateDHConfirmed?: string;
  dateAMConfirmed?: string;
  isAssigned?: boolean;
  isApprovedByAssetManager?: boolean;
  isApprovedByDepartmentHead?: boolean;
  dhTouched?: boolean;
  amTouched?: boolean;
}
