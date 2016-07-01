import { Component } from '@angular/core';
//import{DropdownDemoComponent} from './dropdown.component'

@Component({
    selector: 'oz-ftransfer',
    template: ` <div class="row">
                        <div class="panel-searchbar panel-success">
                            <div class="panel-body">
                                <div class="col-sm-3">
                                    <p style="font-size: 30px">I want to convert</p>
                                </div>
                                <div class="col-sm-2">
                                    <input type="text" class="form-control input-lg" value="1000" />
                                </div>
                                <div class="col-sm-2">
                                        <select>
                                            <option value="volvo">AUD</option>
                                            <option value="saab">USD</option>
                                            <option value="mercedes">EUR</option>
                                            <option value="audi">YEN</option>
                                        </select>
                                </div>
                                <div class="col-sm-1" style="font-size: 30px">To</div>
                                <div class="col-sm-2">
                                    <select class="form-control select" style="display: none;">
                                        <option>Option 1</option>
                                        <option>Option 2</option>
                                        <option>Option 3</option>
                                        <option>Option 4</option>
                                        <option>Option 5</option>
                                    </select>
                                    <button type="button" class="btn dropdown-toggle btn-default btn-lg" data-toggle="dropdown" title="Option 1" aria-expanded="false"><span class="pull-left">Option 1</span>&nbsp;<span class="caret"></span></button>

                                </div>
                                <div class="col-sm-2">
                                    <button type="button" class="btn btn-success btn-lg">GO</button>
                                </div>
                            </div>
                        </div>
                    </div>
                        <div class="row">
                        <div class="panel panel-info">
                            <div class="panel-heading">
                                <h3 class="panel-title pull-left">Commonwealth Bank</h3>
                            </div>
                            <div class="panel-body">
                                <div class="row">
                                    <div class="col-sm-1">
                                        <img src="layout/img/cba.gif" class="pull-left" style="width: 100px;height: 80px; padding-left:10px; padding-right:10px; padding-top:10px" />
                                    </div>
                                    <div class="col-sm-6">
                                        <div class="alert alert-info" role="alert">
                                            <strong>Exchange Rate</strong> 0.112234
                                        </div>
                                    </div>
                                    <div class="col-sm-4">
                                        <div class="widget widget-primary">
                                            <div class="widget-title">TOTAL</div>
                                            <div class="widget-int">$ <span data-toggle="counter" data-to="1564">1,564</span></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="panel-footer">
                                <div class="row">
                                    <div class="col-sm-4 pull-left">
                                        <button type="button" class="btn-tile btn-tile-success" data-container="body" data-toggle="popover" data-placement="left" data-content="Last Updated" data-original-title="" title="" aria-describedby="popover845264"><span class="fa fa fa-calendar"></span></button>
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
                        <div class="panel panel-info">
                            <div class="panel-heading">
                                <h3 class="panel-title pull-left">NAB</h3>
                            </div>
                            <div class="panel-body">
                                <div class="row">
                                    <div class="col-sm-1">
                                        <img src="layout/img/nab.jpg" class="pull-left" style="width: 100px;height: 80px; padding-left:10px; padding-right:10px; padding-top:10px" />
                                    </div>
                                    <div class="col-sm-6">
                                        <div class="alert alert-info" role="alert">
                                            <strong>Exchange Rate</strong> 0.112234
                                        </div>
                                    </div>
                                    <div class="col-sm-4">
                                        <div class="widget widget-primary">
                                            <div class="widget-title">TOTAL</div>
                                            <div class="widget-int">$ <span data-toggle="counter" data-to="1564">1,564</span></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="panel-footer">
                                <div class="row">
                                    <div class="col-sm-4 pull-left">
                                        <button type="button" class="btn-tile btn-tile-success" data-container="body" data-toggle="popover" data-placement="left" data-content="Last Updated" data-original-title="" title="" aria-describedby="popover845264"><span class="fa fa fa-calendar"></span></button>
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
                        <div class="panel panel-info">
                            <div class="panel-heading">
                                <h3 class="panel-title pull-left">ANZ</h3>
                            </div>
                            <div class="panel-body">
                                <div class="row">
                                    <div class="col-sm-1">
                                        <img src="layout/img/anz.png" class="pull-left" style="width: 100px;height: 80px; padding-left:10px; padding-right:10px; padding-top:10px" />
                                    </div>
                                    <div class="col-sm-6">
                                        <div class="alert alert-info" role="alert">
                                            <strong>Exchange Rate</strong> 0.112234
                                        </div>
                                    </div>
                                    <div class="col-sm-4">
                                        <div class="widget widget-primary">
                                            <div class="widget-title">TOTAL</div>
                                            <div class="widget-int">$ <span data-toggle="counter" data-to="1564">1,564</span></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="panel-footer">
                                <div class="row">
                                    <div class="col-sm-4 pull-left">
                                        <button type="button" class="btn-tile btn-tile-success" data-container="body" data-toggle="popover" data-placement="left" data-content="Last Updated" data-original-title="" title="" aria-describedby="popover845264"><span class="fa fa fa-calendar"></span></button>
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
                        </div><div class="panel panel-info">
                            <div class="panel-heading">
                                <h3 class="panel-title pull-left">Westpac</h3>
                            </div>
                            <div class="panel-body">
                                <div class="row">
                                    <div class="col-sm-1">
                                        <img src="layout/img/westpac.jpg" class="pull-left" style="width: 100px;height: 80px; padding-left:10px; padding-right:10px; padding-top:10px" />
                                    </div>
                                    <div class="col-sm-6">
                                        <div class="alert alert-info" role="alert">
                                            <strong>Exchange Rate</strong> 0.112234
                                        </div>
                                    </div>
                                    <div class="col-sm-4">
                                        <div class="widget widget-primary">
                                            <div class="widget-title">TOTAL</div>
                                            <div class="widget-int">$ <span data-toggle="counter" data-to="1564">1,564</span></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="panel-footer">
                                <div class="row">
                                    <div class="col-sm-4 pull-left">
                                        <button type="button" class="btn-tile btn-tile-success" data-container="body" data-toggle="popover" data-placement="left" data-content="Last Updated" data-original-title="" title="" aria-describedby="popover845264"><span class="fa fa fa-calendar"></span></button>
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
                    </div>

    `,
    //directives:[DropdownDemoComponent]
})

export class ForeignTransfersComponent {
    
}