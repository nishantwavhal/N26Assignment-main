/*
Author: Nishant Mohan Wavhal
Created Date: 14/1/2023
Lightning Web Component for Product Info
*/
import { LightningElement,api} from 'lwc';
import getCostPerService from '@salesforce/apex/Product_Info_Controller.cost_per_Services';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class Product_InfoClient extends LightningElement{
@api recordId;
mdtwrap=[];
error;

    connectedCallback()
    {
      this.handleLoad();
    }

    handleLoad() 
    {
        getCostPerService({caseId:this.recordId})
            .then(result => {
                this.mdtwrap=result;
            })
            .catch(error => {
                this.error = error;
                console.log('Error',this.error);
                this.dispatchEvent(
                new ShowToastEvent({
                title: "Error",
                message:this.error.body.message,
                variant: "Error",
            }),
          );    
        });
    }
}