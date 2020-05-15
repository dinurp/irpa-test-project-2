
// ----------------------------------------------------------------
//   Test menu for scenario workflow2a 
// ----------------------------------------------------------------
GLOBAL.events.START.on(function (ev) {
	if (ctx.options.isDebug) {
		// Add item in systray menu.
		systray.addMenu('', 'workflow2a', 'Test workflow2a', '', function (ev) {
			var rootData_scenarios_workflow2 = ctx.dataManagers.rootData_scenarios_workflow2.create();
			// Initialize your data here.
			GLOBAL.scenarios.workflow2a.start(rootData_scenarios_workflow2);
		});
	}
});

//---------------------------------------------------
// Scenario workflow2a Starter ()
//---------------------------------------------------

// ----------------------------------------------------------------
//   Scenario: workflow2a
// ----------------------------------------------------------------
GLOBAL.scenario({ workflow2a: function(ev, sc) {
	var rootData_scenarios_workflow2 = sc.data;

	sc.setMode(e.scenario.mode.clearIfRunning);
	sc.setScenarioTimeout(600000); // Default timeout for global scenario.
	sc.onError(function(sc, st, ex) { sc.endScenario(); }); // Default error handler.
	sc.onTimeout(30000, function(sc, st) { sc.endScenario(); }); // Default timeout handler for each step.
	sc.step(GLOBAL.steps.Write_log, GLOBAL.steps.Set_Context_2);
	sc.step(GLOBAL.steps.Set_Context_2, GLOBAL.steps.Write_log_1);
	sc.step(GLOBAL.steps.Write_log_1, null);
}}, ctx.dataManagers.rootData_scenarios_workflow2).setId('cbffe670-2c89-46a3-bcd1-55f5cd2e1356') ;

// ----------------------------------------------------------------
//   Step: Write_log
// ----------------------------------------------------------------
GLOBAL.step({ Write_log: function(ev, sc, st) {
	var rootData_scenarios_workflow2 = sc.data;
	ctx.workflow('workflow2a', '9204f199-4cad-4ca4-a45e-5172f818959f') ;
	// Write log
	ctx.log(rootData_scenarios_workflow2.inArgs, e.logIconType.Info);
	sc.endStep(); // Set_Context_2
	return;
}});

// ----------------------------------------------------------------
//   Step: Set_Context_2
// ----------------------------------------------------------------
GLOBAL.step({ Set_Context_2: function(ev, sc, st) {
	var rootData_scenarios_workflow2 = sc.data;
	ctx.workflow('workflow2a', 'e0a03ba9-b556-4e60-a9e0-92f8301d4671') ;
	// Set Context
	rootData_scenarios_workflow2.outArgs.FullName = rootData_scenarios_workflow2.inArgs.LastName + ", " + rootData_scenarios_workflow2.inArgs.FirstName;
	sc.endStep(); // Write_log_1
	return;
}});

// ----------------------------------------------------------------
//   Step: Write_log_1
// ----------------------------------------------------------------
GLOBAL.step({ Write_log_1: function(ev, sc, st) {
	var rootData_scenarios_workflow2 = sc.data;
	ctx.workflow('workflow2a', '522a41ed-78a0-4cc7-a5f8-562c618d976d') ;
	// Write log
	ctx.log(rootData_scenarios_workflow2.outArgs, e.logIconType.Info);
	sc.endStep(); // end Scenario
	return;
}});
