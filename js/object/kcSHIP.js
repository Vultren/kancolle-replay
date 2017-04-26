var Ship = (function() {

	var name;
	var nameJP;
	var	image, imageDam;
	var	shipType;
	var id, fleetId;
	this.enemy;
	this.LVL;
	this.HP;
	this.FP;
	this.TP;
	this.AA;
	this.AR;
	this.EV;
	this.ASW;
	this.LOS;
	this.LUK;
	this.RNG;
	this.ACC;
	this.maxHP;
	this.equips;
	this.PLANESLOTS;
	this.planecount;
	this.AACItype;
	/*
	this.fuelleft = 10;
		this.fuelDefault = 10;
		this.ammoleft = 10;
		this.ammoDefault = 10;
		this.protection = (side==0)?true:false;
		this.LOSeq = 0;
		this.APtype = false;
		this.morale = 49;
		this.moraleDefault = 49;
		
		this._nbtype = false;
		this._astype = false;
		this._aswpower = false;*/
	

	Ship = function(mid, hp, side) {
		var data = (SHIPDATA[mid])
	};

	Ship.prototype.damage = function(dam) {
		this.curHP -= Math.floor(dam);
	};

	Ship.prototype = {
		isSunk : function() {
			return this.curHP <= 0;
		},
		hasonlytorp : function() {

		},
		hasbomber : function() {
			
		},
		issub : function() {
			return shipType == 'SS' || shipType == 'SSV';
		},
		isinstall : function() {
			return shipType == 'Installation' || installtype > 0;
		},
		isCV : function() {
			return shipType == 'CV' || shipType == 'CVL' || shipType == 'CVN' || shipType == 'CVB' || 
			(shipType == 'AO' && hasbomber());
		},
		generateGraphic : function() {
			
		},
		update : function() {
			
		}
	};
	
	
	return Ship;
})();
