var Ship = (function() {

	this.name;
	this.nameJP;
	this.image, this.imageDam;
	this.shipType;
	this.id, this.fleetId, this.slot;
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
	this.planetypes;
	this.PLANESLOTS;
	this.planecount;
	this.AACItype;
	this.xorigin;
	this.graphic;
	this.status;
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

	Ship = function(mid, side, hp, mhp, slot, equips) {
		var data = (SHIPDATA[mid]) ? SHIPDATA[mid] : SHIPDATA[0];
		this.name = data.name;
		this.nameJP = data.nameJP;
		this.image = data.image;
		this.imageDam = data.imageDam;
		this.shipType = data.type;
		this.installtype = (data.installtype) ? data.installtype : 0;
		this.id = mid;
		this.fleetId = data.nid;
		this.enemy = side;
		this.LVL = 1;
		this.HP = (hp) ? hp : data.HP;
		this.FP = (data.FPbase) ? data.FPbase : data.FP;
		this.TP = (data.TPbase) ? data.TPbase : data.TP;
		this.AA = (data.AAbase) ? data.AAbase : data.AA;
		this.AR = (data.ARbase) ? data.ARbase : data.AR;
		this.EV = (data.EVbase) ? data.EVbase : data.EV;
		this.ASW = (data.ASWbase) ? data.ASWbase : data.ASW;
		this.LOS = (data.LOSbase) ? data.LOSbase : data.LOS;
		this.LUK = (data.LUK) ? data.LUK : data.LUKmax;
		this.RNG = data.RNG;
		this.ACC = 0;

		this.maxHP = (mhp) ? mhp : data.HPmax;
		this.equips = [];
		this.planetypes = [];
		this.PLANESLOTS = [];
		this.planecount = data.SLOTS;
		this.AACItype = 0;
		
		this.slot = slot+((side==1)?10:0);
		this.xorigin = (side==0)? 0 : 631;
		this.graphic = null;
		this.status = 4;
	};

	/*
	Ship.prototype = {
			damage : function(dam) {
				this.curHP -= Math.floor(dam);
			},
	
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
				return shipType == 'CV' || shipType == 'CVL' || shipType == 'CVN' || shipType == 'CVB' || (shipType == 'AO' && hasbomber());
			},
			generateGraphic : function() {
	
			},
			update : function() {
	
			}
		};*/
	

	return Ship;
})();
