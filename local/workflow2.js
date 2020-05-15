
// ----------------------------------------------------------------
//   Test menu for scenario workflow2 
// ----------------------------------------------------------------
GLOBAL.events.START.on(function (ev) {
//	if (ctx.options.isDebug) {
		// Add item in systray menu.
		systray.addMenu('', 'workflow2', 'Test workflow2', '', function (ev) {
			var rootData_scenarios_workflow2 = ctx.dataManagers.rootData_scenarios_workflow2.create();
			
			// Initialize your data here.
			rootData_scenarios_workflow2.inJSON = '{"FirstName":"John","LastName":"Shark"}';
			GLOBAL.scenarios.workflow2.start(rootData_scenarios_workflow2);
		});
//	}
});

//---------------------------------------------------
// Scenario workflow2 Starter ()
//---------------------------------------------------

// ----------------------------------------------------------------
//   Scenario: workflow2
// ----------------------------------------------------------------
GLOBAL.scenario({ workflow2: function(ev, sc) {
	var rootData_scenarios_workflow2 = sc.data;

	sc.setMode(e.scenario.mode.clearIfRunning);
	sc.setScenarioTimeout(600000); // Default timeout for global scenario.
	sc.onError(function(sc, st, ex) { sc.endScenario(); }); // Default error handler.
	sc.onTimeout(30000, function(sc, st) { sc.endScenario(); }); // Default timeout handler for each step.
	sc.step(GLOBAL.steps.Set_Context, GLOBAL.steps.Custom);
	sc.step(GLOBAL.steps.Custom, GLOBAL.steps.Set_Context_1);
	sc.step(GLOBAL.steps.Set_Context_1, null);
}}, ctx.dataManagers.rootData_scenarios_workflow2).setId('cf9c65d1-5172-4c9e-a9cf-52795dfe9827') ;

// ----------------------------------------------------------------
//   Step: Set_Context
// ----------------------------------------------------------------
GLOBAL.step({ Set_Context: function(ev, sc, st) {
	var rootData_scenarios_workflow2 = sc.data;
	ctx.workflow('workflow2', '559c0bc9-46d0-4a25-a573-801fdbb000f5') ;
	// Set Context
	rootData_scenarios_workflow2.inArgs = ctx.json.parse(sc.data.inJSON);
	sc.endStep(); // Custom
	return;
}});

// ----------------------------------------------------------------
//   Step: Custom
// ----------------------------------------------------------------
GLOBAL.step({ Custom: function(ev, sc, st) {
	var rootData_scenarios_workflow2 = sc.data;
	ctx.workflow('workflow2', '1bd58f9c-caea-42bc-a588-aa77501b86b5') ;
	// Custom
	GLOBAL.scenarios.workflow2a.start(rootData_scenarios_workflow2);
	sc.endStep(); // Set_Context_1
	return;
}});

// ----------------------------------------------------------------
//   Step: Set_Context_1
// ----------------------------------------------------------------
GLOBAL.step({ Set_Context_1: function(ev, sc, st) {
	var rootData_scenarios_workflow2 = sc.data;
	ctx.workflow('workflow2', '7b411fae-afad-4d30-b438-7a39f9170063') ;
	// Set Context
	rootData_scenarios_workflow2.outJSON = ctx.json.stringify(sc.data.outArgs);
	sc.endStep(); // end Scenario
	return;
}});
