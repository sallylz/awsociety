import React from 'react';

export const Home = () => (
    <div className="Lead">

        <div className="row">
            <div class="col-xs-12 col-md-12">
                <div className="panel-hidden" style={{fontSize: '25px'}}>
                    <span class="glyphicon glyphicon-earphone" aria-hidden="true"></span>
                    &nbsp;&nbsp;&nbsp;
                    <strong>Application</strong>
                </div>

                <br></br>

                <div className="panel-body">
                    <form action="https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8" method="POST">
                        <input type="hidden" name="oid" defaultValue="00D3h000000E1Ad" />
                        <input type="hidden" name="retURL" defaultValue="http://google.com"/>

                        <div className="col-xs-6 col-md-6">
                            <div className="form-group">
                                <label for="first_ name">First Name <span style={{color:'red'}}>*</span></label> <input id="first_name" maxlength="40"
                                    name="first_name" size="20" type="text" class="form-control" required/>
                            </div>
                        </div>
                        <div className="col-xs-6 col-md-6">
                            <div className="form-group">
                                <label for="last_name">Last Name <span style={{color:'red'}}>*</span></label> <input id="last_name" maxlength="80"
                                    name="last_name" size="20" type="text" class="form-control" required/>
                            </div>
                        </div>
                        <div className="col-xs-6 col-md-6">
                            <div className="form-group">
                                <label for="email">Email <span style={{color:'red'}}>*</span></label> <input  id="email" maxlength="80" 
                                    name="email" size="20" type="text" class="form-control" required />
                            </div>
                        </div>
                        <div className="col-xs-6 col-md-6">
                            <div className="form-group">
                                <label for="phone">Phone <span style={{color:'red'}}>*</span></label> <input  id="phone" maxlength="40" 
                                    name="phone" size="20" type="text" class="form-control" required/>
                            </div>
                        </div>
                        <div className="col-xs-6 col-md-6">
                            <div className="form-group">
                                <p>
                                    Date of Birth: <span class="dateInput dateOnlyInput"> <input  id="00N3h000000uP6P" 
                                        name="00N3h000000uP6P" size="12" type="text" class="form-control"/></span>
                                </p>
                            </div>
                        </div>
                        <div className="col-xs-6 col-md-6">
                            <div className="form-group">
                                <p>
                                    CA Driver&#39;s License or ID: <input  id="00N3h000004XvfA" maxlength="15" 
                                        name="00N3h000004XvfA" size="20" type="text" class="form-control" required/>
                                </p>
                            </div>
                        </div>
                        <div className="col-xs-6 col-md-6">
                            <div className="form-group">
                                <label for="company">Company <span style={{color:'red'}}>*</span></label> <input  id="company" maxlength="40" 
                                    name="company" size="20" type="text" class="form-control" required />
                            </div>
                        </div>
                        <br></br>
                        <div className="col-xs-6 col-md-6" style={{fontSize: '17px'}}>
                            <p>
                                <strong>Address</strong>
                            </p>
                        </div> 

                        <div className="col-xs-4 col-md-4">
                            <div className="form-group">
                                <label for="street">Street</label> <textarea name="street" class="form-control"></textarea>
                                <label for="city">City</label> <input  id="city" maxlength="40" name="city" size="20" type="text" class="form-control"/>
                                <label for="state">State/Province</label> <input  id="state" maxlength="20" name="state" size="20" type="text" class="form-control"/>
                                <label for="zip">Zip</label> <input  id="zip" maxlength="20" name="zip" size="20" type="text" class="form-control"/>  
                                <label for="country">Country</label> <input  id="country" maxlength="40" name="country" size="20" type="text" class="form-control"/><br></br>
                            </div>
                        </div>                        

                        <div className="col-xs-6 col-md-6" style={{fontSize: '17px'}}>
                            <p>
                                <strong>Housing Information</strong>
                            </p>
                        </div>                        

                        <div className="col-xs-6 col-md-6">
                            <div className="form-group">
                                <p>
                                    Housing: <span style={{color:'red'}}>*</span> <select  id="00N3h000004XvfF" name="00N3h000004XvfF" title="Housing" class="form-control">
                                        <option value="">--None--</option><option value="Own">Own</option>
                                        <option value="Rent">Rent</option>
                                        <option value="Living with Parents">Living with Parents</option>
                                        </select>
                                </p>
                                <p>
                                    My household consists of: <span style={{color:'red'}}>*</span> <select  id="00N3h000004XvfP" name="00N3h000004XvfP" title="My household consists of:" class="form-control">
                                        <option value="">--None--</option><option value="Adults only">Adults only</option>
                                        <option value="Family with children under 13 years">Family with children under 13 years</option>
                                        <option value="Family with children over 13 years">Family with children over 13 years</option>
                                        <option value="Live alone">Live alone</option>
                                        </select>
                                </p>
                                <p>
                                    My activity level at home is: <span style={{color:'red'}}>*</span> <select  id="00N3h000004XvfU" name="00N3h000004XvfU" title="My activity level at home is:" class="form-control">
                                        <option value="">--None--</option><option value="Quiet">Quiet</option>
                                        <option value="Active">Active</option>
                                        <option value="Hectic">Hectic</option>
                                        </select>
                                </p>
                                <p>
                                    Fenced Yard on your Property? <input  id="00N3h000004XvfK" name="00N3h000004XvfK" type="checkbox" value="1" />
                                </p>
                            </div>
                        </div>
                        <br></br>
                        <div className="col-xs-6 col-md-6" style={{fontSize: '17px'}}>
                            <p>
                                <strong>Pet Information</strong>
                            </p>
                        </div> 

                        <div className="col-xs-6 col-md-6">
                            <div className="form-group">
                                <p>
                                    Pet Preference: <select  id="00N3h000000uP6e" name="00N3h000000uP6e" title="Pet Preference" class="form-control">
                                        <option value="">--None--</option><option value="Dog">Dog</option>
                                        <option value="Cat">Cat</option>
                                        <option value="Rabbit">Rabbit</option>
                                        <option value="Hamster">Hamster</option>
                                        </select>
                                </p>
                                <p>
                                    Age Level: <select  id="00N3h000000uP7X" name="00N3h000000uP7X" title="Age Level" class="form-control">
                                        <option value="">--None--</option><option value="Puppy">Puppy</option>
                                        <option value="Kitten">Kitten</option>
                                        <option value="Adult">Adult</option>
                                        <option value="Senior">Senior</option>
                                        </select>
                                </p>
                                <p>
                                    Have you adopted this pet before? <select  id="00N3h000000uP6j" name="00N3h000000uP6j" title="Have you adopted this pet before?" class="form-control">
                                        <option value="">--None--</option><option value="Yes">Yes</option>
                                        <option value="No">No</option>
                                        </select>
                                </p>
                                <p>
                                    Why do you want to adopt this pet? <textarea  id="00N3h000000uP6t" name="00N3h000000uP6t" 
                                        rows="5" type="text" wrap="soft" class="form-control"></textarea>
                                </p>
                                <p>
                                    Household members allergic to animals? <select  id="00N3h000000uP6o" name="00N3h000000uP6o" title="Household members allergic to animals?" class="form-control">
                                        <option value="">--None--</option><option value="Yes">Yes</option>
                                        <option value="No">No</option>
                                        </select>
                                </p>
                                <p>
                                    Have you adopted this pet before? <select  id="00N3h000000uP6j" name="00N3h000000uP6j" title="Have you adopted this pet before?" class="form-control">
                                        <option value="">--None--</option><option value="Yes">Yes</option>
                                        <option value="No">No</option>
                                        </select>
                                </p>

                            </div>
                        </div>

                        <div className="col-xs-6 col-md-6">
                            <div className="form-group">
                                <p>
                                    Maximum Miles Away: <select  id="00N3h0000012Zkw" name="00N3h0000012Zkw" title="Maximum Miles Away" class="form-control">
                                        <option value="">--None--</option><option value="10">10</option>
                                        <option value="20">20</option>
                                        <option value="30">30</option>
                                        <option value="40">40</option>
                                    </select><br></br>
                                </p>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-xs-4 col-md-4">
                                <div class="form-group">
                                    <input class="btn btn-primary" type="submit" name="submit" />
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>        
    </div>
)
    
