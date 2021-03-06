import { Component } from '@angular/core';

@Component({
  selector: 'oz-resultpanel',
  template: ` <div class="panel panel-info">
                            <div class="panel-heading">
                                <h3 class="panel-title pull-left">{{bankName}}</h3>
                            </div>
                            <div class="panel-body">
                                <div class="row">
                                    <div class="col-sm-1">
                                        <img [src]="bankImageUrl" class="pull-left" style="width: 100px;height: 80px; padding-left:10px; padding-right:10px; padding-top:10px" />
                                    </div>
                                    <div class="col-sm-6">
                                        <div class="alert alert-info" role="alert">
                                            <strong>Exchange Rate</strong> {{bankExchangeRate}}
                                        </div>
                                    </div>
                                    <div class="col-sm-4">
                                        <div class="widget widget-primary">
                                            <div class="widget-title">TOTAL</div>
                                            <div class="widget-int">$ <span data-toggle="counter" data-to="1564">{{total}}</span></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="panel-footer">
                                <div class="row">
                                    <div class="col-sm-4 pull-left">
                                        <button type="button" class="btn-tile btn-tile-success" data-container="body" data-toggle="popover" data-placement="left" data-content="Last Updated" data-original-title="" title="" aria-describedby="popover845264"><span class="fa fa fa-calendar"></span></button>{{lastUpdateTime}}
                                    </div>
                                    <div class="col-sm-2 col-sm-push-6">
                                        <div>
                                            <button type="button" class="btn-tile btn-tile-warning"><span class="fa fa-globe"></span></button>
                                        </div>
                                    </div>
                                    <div class="col-sm-2 col-sm-push-4">
                                        <div class="pull-right">
                                            <button type="button" class="btn-tile btn-tile-danger" data-container="body" data-toggle="popover" data-placement="left" data-content="Disclaimer goes here" data-original-title="" title="" aria-describedby="popover845264"><span class="fa fa-exclamation-triangle"></span></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                </div> 
`
})

export class ResultPanelComponent{
        bankImageUrl:string = 'layout/img/cba.gif';
        bankName:string = 'Commonwealth Bank';
        bankSiteUrl:string;
        bankExchangeRate:number = 0.112234;
        total:number = 1564;
        lastUpdateTime:string = '2016/10/12 02.00 pm';
}