;(function(){
	window.Us = function(){
		this.initPoint = {x: 310,y:560,text:'#'};
		this.points = [];
	}

	Us.prototype.createPoints = function(){
		this.points.push(this.initPoint);//1
		this.points.push({x: this.initPoint.x-8, y: this.initPoint.y, text:'2'});
		this.points.push({x: this.initPoint.x-50, y: this.initPoint.y});
		this.points.push({x: this.initPoint.x-60, y: this.initPoint.y});
		this.points.push({x: this.initPoint.x-70, y: this.initPoint.y});
		this.points.push({x: this.initPoint.x-80, y: this.initPoint.y});
		this.points.push({x: this.initPoint.x-120, y: this.initPoint.y});
		this.points.push({x: this.initPoint.x-130, y: this.initPoint.y});
		this.points.push({x: this.initPoint.x-140, y: this.initPoint.y});
		this.points.push({x: this.initPoint.x-150, y: this.initPoint.y});
		this.points.push({x: this.initPoint.x-160, y: this.initPoint.y});
		this.points.push({x: this.initPoint.x-170, y: this.initPoint.y});
		this.points.push({x: this.initPoint.x-220, y: this.initPoint.y});
		this.points.push({x: this.initPoint.x-230, y: this.initPoint.y});
		this.points.push({x: this.initPoint.x-240, y: this.initPoint.y});
		this.points.push({x: this.initPoint.x, y: this.initPoint.y-10, text:'d'});
		this.points.push({x: this.initPoint.x-12, y: this.initPoint.y-10, text:'|'});//2
		this.points.push({x: this.initPoint.x-45, y: this.initPoint.y-10});
		this.points.push({x: this.initPoint.x-55, y: this.initPoint.y-10});
		this.points.push({x: this.initPoint.x-65, y: this.initPoint.y-10});
		this.points.push({x: this.initPoint.x-75, y: this.initPoint.y-10});
		this.points.push({x: this.initPoint.x-85, y: this.initPoint.y-10});
		this.points.push({x: this.initPoint.x-110, y: this.initPoint.y-10});
		this.points.push({x: this.initPoint.x-120, y: this.initPoint.y-10});
		this.points.push({x: this.initPoint.x-130, y: this.initPoint.y-10});
		this.points.push({x: this.initPoint.x-140, y: this.initPoint.y-10});
		this.points.push({x: this.initPoint.x-150, y: this.initPoint.y-10});
		this.points.push({x: this.initPoint.x-160, y: this.initPoint.y-10});
		this.points.push({x: this.initPoint.x-170, y: this.initPoint.y-10});
		this.points.push({x: this.initPoint.x-180, y: this.initPoint.y-10});
		this.points.push({x: this.initPoint.x-215, y: this.initPoint.y-10});
		this.points.push({x: this.initPoint.x-225, y: this.initPoint.y-10});
		this.points.push({x: this.initPoint.x-235, y: this.initPoint.y-10});
		this.points.push({x: this.initPoint.x, y: this.initPoint.y-20});//3
		this.points.push({x: this.initPoint.x-12, y: this.initPoint.y-20});
		this.points.push({x: this.initPoint.x-44, y: this.initPoint.y-20});
		this.points.push({x: this.initPoint.x-54, y: this.initPoint.y-20});
		this.points.push({x: this.initPoint.x-64, y: this.initPoint.y-20});
		this.points.push({x: this.initPoint.x-74, y: this.initPoint.y-20});
		this.points.push({x: this.initPoint.x-83, y: this.initPoint.y-20});
		this.points.push({x: this.initPoint.x-108, y: this.initPoint.y-20});
		this.points.push({x: this.initPoint.x-118, y: this.initPoint.y-20});
		this.points.push({x: this.initPoint.x-128, y: this.initPoint.y-20});
		this.points.push({x: this.initPoint.x-138, y: this.initPoint.y-20});
		this.points.push({x: this.initPoint.x-148, y: this.initPoint.y-20});
		this.points.push({x: this.initPoint.x-158, y: this.initPoint.y-20});
		this.points.push({x: this.initPoint.x-168, y: this.initPoint.y-20});
		this.points.push({x: this.initPoint.x-178, y: this.initPoint.y-20});
		this.points.push({x: this.initPoint.x-182, y: this.initPoint.y-20});
		this.points.push({x: this.initPoint.x-205, y: this.initPoint.y-20});
		this.points.push({x: this.initPoint.x-215, y: this.initPoint.y-20});
		this.points.push({x: this.initPoint.x-225, y: this.initPoint.y-20});

		this.points.push({x: this.initPoint.x-3, y: this.initPoint.y-30});//4
		this.points.push({x: this.initPoint.x-13, y: this.initPoint.y-30});
		this.points.push({x: this.initPoint.x-39, y: this.initPoint.y-30});
		this.points.push({x: this.initPoint.x-49, y: this.initPoint.y-30});
		this.points.push({x: this.initPoint.x-59, y: this.initPoint.y-30});
		this.points.push({x: this.initPoint.x-69, y: this.initPoint.y-30});
		this.points.push({x: this.initPoint.x-79, y: this.initPoint.y-30});
		this.points.push({x: this.initPoint.x-89, y: this.initPoint.y-30});
		this.points.push({x: this.initPoint.x-99, y: this.initPoint.y-30});
		this.points.push({x: this.initPoint.x-109, y: this.initPoint.y-30});
		this.points.push({x: this.initPoint.x-119, y: this.initPoint.y-30});
		this.points.push({x: this.initPoint.x-129, y: this.initPoint.y-30});
		this.points.push({x: this.initPoint.x-139, y: this.initPoint.y-30});
		this.points.push({x: this.initPoint.x-149, y: this.initPoint.y-30});
		this.points.push({x: this.initPoint.x-159, y: this.initPoint.y-30});
		this.points.push({x: this.initPoint.x-169, y: this.initPoint.y-30});
		this.points.push({x: this.initPoint.x-179, y: this.initPoint.y-30});
		this.points.push({x: this.initPoint.x-189, y: this.initPoint.y-30});
		this.points.push({x: this.initPoint.x-199, y: this.initPoint.y-30});
		this.points.push({x: this.initPoint.x-209, y: this.initPoint.y-30});
		this.points.push({x: this.initPoint.x-219, y: this.initPoint.y-30});

		this.points.push({x: this.initPoint.x-5, y: this.initPoint.y-40});//5
		this.points.push({x: this.initPoint.x-15, y: this.initPoint.y-40});
		this.points.push({x: this.initPoint.x-35, y: this.initPoint.y-40});
		this.points.push({x: this.initPoint.x-45, y: this.initPoint.y-40});
		this.points.push({x: this.initPoint.x-55, y: this.initPoint.y-40});
		this.points.push({x: this.initPoint.x-65, y: this.initPoint.y-40});
		this.points.push({x: this.initPoint.x-75, y: this.initPoint.y-40});
		this.points.push({x: this.initPoint.x-85, y: this.initPoint.y-40});
		this.points.push({x: this.initPoint.x-95, y: this.initPoint.y-40});
		this.points.push({x: this.initPoint.x-105, y: this.initPoint.y-40});
		this.points.push({x: this.initPoint.x-115, y: this.initPoint.y-40});
		this.points.push({x: this.initPoint.x-125, y: this.initPoint.y-40});
		this.points.push({x: this.initPoint.x-135, y: this.initPoint.y-40});
		this.points.push({x: this.initPoint.x-145, y: this.initPoint.y-40});
		this.points.push({x: this.initPoint.x-155, y: this.initPoint.y-40});
		this.points.push({x: this.initPoint.x-165, y: this.initPoint.y-40});
		this.points.push({x: this.initPoint.x-175, y: this.initPoint.y-40});
		this.points.push({x: this.initPoint.x-185, y: this.initPoint.y-40});
		this.points.push({x: this.initPoint.x-195, y: this.initPoint.y-40});
		this.points.push({x: this.initPoint.x-205, y: this.initPoint.y-40});
		this.points.push({x: this.initPoint.x-210, y: this.initPoint.y-40});

		this.points.push({x: this.initPoint.x-10, y: this.initPoint.y-50});//6
		this.points.push({x: this.initPoint.x-20, y: this.initPoint.y-50});
		this.points.push({x: this.initPoint.x-33, y: this.initPoint.y-50});
		this.points.push({x: this.initPoint.x-43, y: this.initPoint.y-50});
		this.points.push({x: this.initPoint.x-53, y: this.initPoint.y-50});
		this.points.push({x: this.initPoint.x-63, y: this.initPoint.y-50});
		this.points.push({x: this.initPoint.x-73, y: this.initPoint.y-50});
		this.points.push({x: this.initPoint.x-83, y: this.initPoint.y-50});
		this.points.push({x: this.initPoint.x-93, y: this.initPoint.y-50});
		this.points.push({x: this.initPoint.x-103, y: this.initPoint.y-50});
		this.points.push({x: this.initPoint.x-113, y: this.initPoint.y-50});
		this.points.push({x: this.initPoint.x-123, y: this.initPoint.y-50});
		this.points.push({x: this.initPoint.x-133, y: this.initPoint.y-50});
		this.points.push({x: this.initPoint.x-143, y: this.initPoint.y-50});
		this.points.push({x: this.initPoint.x-153, y: this.initPoint.y-50});
		this.points.push({x: this.initPoint.x-163, y: this.initPoint.y-50});
		this.points.push({x: this.initPoint.x-173, y: this.initPoint.y-50});
		this.points.push({x: this.initPoint.x-183, y: this.initPoint.y-50});
		this.points.push({x: this.initPoint.x-193, y: this.initPoint.y-50});
		this.points.push({x: this.initPoint.x-204, y: this.initPoint.y-50});
		this.points.push({x: this.initPoint.x-209, y: this.initPoint.y-50});

		this.points.push({x: this.initPoint.x-16, y: this.initPoint.y-60});//7
		// this.points.push({x: this.initPoint.x-18, y: this.initPoint.y-60});
		this.points.push({x: this.initPoint.x-28, y: this.initPoint.y-60});
		this.points.push({x: this.initPoint.x-38, y: this.initPoint.y-60});
		this.points.push({x: this.initPoint.x-48, y: this.initPoint.y-60});
		this.points.push({x: this.initPoint.x-58, y: this.initPoint.y-60});
		this.points.push({x: this.initPoint.x-68, y: this.initPoint.y-60});
		this.points.push({x: this.initPoint.x-78, y: this.initPoint.y-60});
		this.points.push({x: this.initPoint.x-88, y: this.initPoint.y-60});
		this.points.push({x: this.initPoint.x-98, y: this.initPoint.y-60});
		this.points.push({x: this.initPoint.x-108, y: this.initPoint.y-60});
		this.points.push({x: this.initPoint.x-118, y: this.initPoint.y-60});
		this.points.push({x: this.initPoint.x-128, y: this.initPoint.y-60});
		this.points.push({x: this.initPoint.x-138, y: this.initPoint.y-60});
		this.points.push({x: this.initPoint.x-148, y: this.initPoint.y-60});
		this.points.push({x: this.initPoint.x-158, y: this.initPoint.y-60});
		this.points.push({x: this.initPoint.x-168, y: this.initPoint.y-60});
		this.points.push({x: this.initPoint.x-178, y: this.initPoint.y-60});
		this.points.push({x: this.initPoint.x-188, y: this.initPoint.y-60});
		this.points.push({x: this.initPoint.x-198, y: this.initPoint.y-60});
		this.points.push({x: this.initPoint.x-208, y: this.initPoint.y-60});


		this.points.push({x: this.initPoint.x-22, y: this.initPoint.y-70});//8
		// this.points.push({x: this.initPoint.x-28, y: this.initPoint.y-70});
		this.points.push({x: this.initPoint.x-38, y: this.initPoint.y-70});
		this.points.push({x: this.initPoint.x-48, y: this.initPoint.y-70});
		this.points.push({x: this.initPoint.x-58, y: this.initPoint.y-70});
		this.points.push({x: this.initPoint.x-68, y: this.initPoint.y-70});
		this.points.push({x: this.initPoint.x-78, y: this.initPoint.y-70});
		this.points.push({x: this.initPoint.x-88, y: this.initPoint.y-70});
		this.points.push({x: this.initPoint.x-98, y: this.initPoint.y-70});
		this.points.push({x: this.initPoint.x-108, y: this.initPoint.y-70});
		this.points.push({x: this.initPoint.x-118, y: this.initPoint.y-70});
		this.points.push({x: this.initPoint.x-128, y: this.initPoint.y-70});
		this.points.push({x: this.initPoint.x-138, y: this.initPoint.y-70});
		this.points.push({x: this.initPoint.x-148, y: this.initPoint.y-70});
		this.points.push({x: this.initPoint.x-158, y: this.initPoint.y-70});
		this.points.push({x: this.initPoint.x-168, y: this.initPoint.y-70});
		this.points.push({x: this.initPoint.x-178, y: this.initPoint.y-70});
		this.points.push({x: this.initPoint.x-188, y: this.initPoint.y-70});
		this.points.push({x: this.initPoint.x-198, y: this.initPoint.y-70});
		this.points.push({x: this.initPoint.x-208, y: this.initPoint.y-70});

		this.points.push({x: this.initPoint.x-22, y: this.initPoint.y-80});//9
		this.points.push({x: this.initPoint.x-28, y: this.initPoint.y-80});
		this.points.push({x: this.initPoint.x-38, y: this.initPoint.y-80});
		this.points.push({x: this.initPoint.x-48, y: this.initPoint.y-80});
		this.points.push({x: this.initPoint.x-58, y: this.initPoint.y-80});
		this.points.push({x: this.initPoint.x-68, y: this.initPoint.y-80});
		this.points.push({x: this.initPoint.x-78, y: this.initPoint.y-80});
		this.points.push({x: this.initPoint.x-88, y: this.initPoint.y-80});
		this.points.push({x: this.initPoint.x-98, y: this.initPoint.y-80});
		this.points.push({x: this.initPoint.x-108, y: this.initPoint.y-80});
		this.points.push({x: this.initPoint.x-118, y: this.initPoint.y-80});
		this.points.push({x: this.initPoint.x-128, y: this.initPoint.y-80});
		this.points.push({x: this.initPoint.x-138, y: this.initPoint.y-80});
		this.points.push({x: this.initPoint.x-148, y: this.initPoint.y-80});
		this.points.push({x: this.initPoint.x-158, y: this.initPoint.y-80});
		this.points.push({x: this.initPoint.x-168, y: this.initPoint.y-80});
		this.points.push({x: this.initPoint.x-178, y: this.initPoint.y-80});
		this.points.push({x: this.initPoint.x-188, y: this.initPoint.y-80});
		this.points.push({x: this.initPoint.x-198, y: this.initPoint.y-80});
		this.points.push({x: this.initPoint.x-208, y: this.initPoint.y-80});

		this.points.push({x: this.initPoint.x-30, y: this.initPoint.y-90});//10
		this.points.push({x: this.initPoint.x-38, y: this.initPoint.y-90});
		this.points.push({x: this.initPoint.x-48, y: this.initPoint.y-90});
		this.points.push({x: this.initPoint.x-58, y: this.initPoint.y-90});
		this.points.push({x: this.initPoint.x-68, y: this.initPoint.y-90});
		this.points.push({x: this.initPoint.x-78, y: this.initPoint.y-90});
		this.points.push({x: this.initPoint.x-88, y: this.initPoint.y-90});
		this.points.push({x: this.initPoint.x-98, y: this.initPoint.y-90});
		this.points.push({x: this.initPoint.x-108, y: this.initPoint.y-90});
		this.points.push({x: this.initPoint.x-118, y: this.initPoint.y-90});
		this.points.push({x: this.initPoint.x-128, y: this.initPoint.y-90});
		this.points.push({x: this.initPoint.x-138, y: this.initPoint.y-90});
		this.points.push({x: this.initPoint.x-148, y: this.initPoint.y-90});
		this.points.push({x: this.initPoint.x-158, y: this.initPoint.y-90});
		this.points.push({x: this.initPoint.x-168, y: this.initPoint.y-90});
		this.points.push({x: this.initPoint.x-178, y: this.initPoint.y-90});
		this.points.push({x: this.initPoint.x-188, y: this.initPoint.y-90});
		this.points.push({x: this.initPoint.x-198, y: this.initPoint.y-90});
		this.points.push({x: this.initPoint.x-202, y: this.initPoint.y-90});

		this.points.push({x: this.initPoint.x-44,  y: this.initPoint.y-100});//11
		this.points.push({x: this.initPoint.x-58,  y: this.initPoint.y-100});
		this.points.push({x: this.initPoint.x-68,  y: this.initPoint.y-100});
		this.points.push({x: this.initPoint.x-78,  y: this.initPoint.y-100});
		this.points.push({x: this.initPoint.x-88,  y: this.initPoint.y-100});
		this.points.push({x: this.initPoint.x-98,  y: this.initPoint.y-100});
		this.points.push({x: this.initPoint.x-108, y: this.initPoint.y-100});
		this.points.push({x: this.initPoint.x-118, y: this.initPoint.y-100});
		this.points.push({x: this.initPoint.x-128, y: this.initPoint.y-100});
		this.points.push({x: this.initPoint.x-138, y: this.initPoint.y-100});
		this.points.push({x: this.initPoint.x-148, y: this.initPoint.y-100});
		this.points.push({x: this.initPoint.x-158, y: this.initPoint.y-100});
		this.points.push({x: this.initPoint.x-168, y: this.initPoint.y-100});
		this.points.push({x: this.initPoint.x-178, y: this.initPoint.y-100});
		this.points.push({x: this.initPoint.x-188, y: this.initPoint.y-100});
		this.points.push({x: this.initPoint.x-198, y: this.initPoint.y-100});

		// this.points.push({x: this.initPoint.x-44,  y: this.initPoint.y-110});
		this.points.push({x: this.initPoint.x-58,  y: this.initPoint.y-110});//12
		this.points.push({x: this.initPoint.x-68,  y: this.initPoint.y-110});
		this.points.push({x: this.initPoint.x-78,  y: this.initPoint.y-110});
		this.points.push({x: this.initPoint.x-88,  y: this.initPoint.y-110});
		// this.points.push({x: this.initPoint.x-98,  y: this.initPoint.y-110});
		// this.points.push({x: this.initPoint.x-108, y: this.initPoint.y-110});
		this.points.push({x: this.initPoint.x-118, y: this.initPoint.y-110});
		this.points.push({x: this.initPoint.x-128, y: this.initPoint.y-110});
		this.points.push({x: this.initPoint.x-138, y: this.initPoint.y-110});
		this.points.push({x: this.initPoint.x-148, y: this.initPoint.y-110});
		this.points.push({x: this.initPoint.x-158, y: this.initPoint.y-110});
		this.points.push({x: this.initPoint.x-168, y: this.initPoint.y-110});
		this.points.push({x: this.initPoint.x-178, y: this.initPoint.y-110});
		this.points.push({x: this.initPoint.x-188, y: this.initPoint.y-110});


		// this.points.push({x: this.initPoint.x-44,  y: this.initPoint.y-120});
		this.points.push({x: this.initPoint.x-58,  y: this.initPoint.y-120});//13
		this.points.push({x: this.initPoint.x-68,  y: this.initPoint.y-120});
		this.points.push({x: this.initPoint.x-78,  y: this.initPoint.y-120});
		this.points.push({x: this.initPoint.x-88,  y: this.initPoint.y-120});
		this.points.push({x: this.initPoint.x-94,  y: this.initPoint.y-120});
		this.points.push({x: this.initPoint.x-128, y: this.initPoint.y-120});
		this.points.push({x: this.initPoint.x-138, y: this.initPoint.y-120});
		this.points.push({x: this.initPoint.x-148, y: this.initPoint.y-120});
		this.points.push({x: this.initPoint.x-158, y: this.initPoint.y-120});
		this.points.push({x: this.initPoint.x-168, y: this.initPoint.y-120});
		this.points.push({x: this.initPoint.x-178, y: this.initPoint.y-120});


		this.points.push({x: this.initPoint.x-62,  y: this.initPoint.y-130});//14
		this.points.push({x: this.initPoint.x-68,  y: this.initPoint.y-130});
		this.points.push({x: this.initPoint.x-78,  y: this.initPoint.y-130});
		this.points.push({x: this.initPoint.x-88,  y: this.initPoint.y-130});
		this.points.push({x: this.initPoint.x-94,  y: this.initPoint.y-130});
		this.points.push({x: this.initPoint.x-138, y: this.initPoint.y-130});
		this.points.push({x: this.initPoint.x-148, y: this.initPoint.y-130});
		this.points.push({x: this.initPoint.x-158, y: this.initPoint.y-130});
		this.points.push({x: this.initPoint.x-168, y: this.initPoint.y-130});

		this.points.push({x: this.initPoint.x-62,  y: this.initPoint.y-140});//15
		this.points.push({x: this.initPoint.x-68,  y: this.initPoint.y-140});
		this.points.push({x: this.initPoint.x-78,  y: this.initPoint.y-140});
		this.points.push({x: this.initPoint.x-88,  y: this.initPoint.y-140});
		this.points.push({x: this.initPoint.x-130, y: this.initPoint.y-140});
		this.points.push({x: this.initPoint.x-148, y: this.initPoint.y-140});
		this.points.push({x: this.initPoint.x-158, y: this.initPoint.y-140});
		this.points.push({x: this.initPoint.x-168, y: this.initPoint.y-140});
		this.points.push({x: this.initPoint.x-172, y: this.initPoint.y-140});

		this.points.push({x: this.initPoint.x-130, y: this.initPoint.y-150});//16
		this.points.push({x: this.initPoint.x-148, y: this.initPoint.y-150});
		this.points.push({x: this.initPoint.x-158, y: this.initPoint.y-150});
		this.points.push({x: this.initPoint.x-168, y: this.initPoint.y-150});
		this.points.push({x: this.initPoint.x-172, y: this.initPoint.y-150});

		this.points.push({x: this.initPoint.x-130, y: this.initPoint.y-160});//17
		this.points.push({x: this.initPoint.x-148, y: this.initPoint.y-160});
		this.points.push({x: this.initPoint.x-158, y: this.initPoint.y-160});
		this.points.push({x: this.initPoint.x-168, y: this.initPoint.y-160});
		this.points.push({x: this.initPoint.x-172, y: this.initPoint.y-160});

		this.points.push({x: this.initPoint.x-135, y: this.initPoint.y-170});//18
		this.points.push({x: this.initPoint.x-148, y: this.initPoint.y-170});
		this.points.push({x: this.initPoint.x-158, y: this.initPoint.y-170});
		this.points.push({x: this.initPoint.x-168, y: this.initPoint.y-170});
		// this.points.push({x: this.initPoint.x-172, y: this.initPoint.y-170});


	};

})();