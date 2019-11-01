var combs = {
    "English": {
      "B.F. Sword": {
        "B.F. Sword": "Death Blade",
        "Recurve Bow": "Giant Slayer",
        "Needlessly Large Rod": "Hextech Gunblade",
        "Tear of the Goddess": "Spear of Shojin",
        "Chain Vest": "Guardian Angel",
        "Negatron Cloak": "The Bloodthirster",
        "Giant's Belt": "Zeke's Herald",
        "Spatula": "Youmuu's Ghostblade",
        "Sparring Glove": "Infinity Edge"
      },
      "Needlessly Large Rod": {
        "B.F. Sword": "Hextech Gunblade",
        "Recurve Bow": "Guinsoo's Rageblade",
        "Needlessly Large Rod": "Rabadon's Deathcap",
        "Tear of the Goddess": "Luden's Echo",
        "Chain Vest": "Locket of the Iron Solari",
        "Negatron Cloak": "Ionic Spark",
        "Giant's Belt": "Morellonomicon",
        "Spatula": "Inferno's Cinder",
        "Sparring Glove": "Jeweled Gauntlet"
      },
      "Recurve Bow": {
        "B.F. Sword": "Giant Slayer",
        "Recurve Bow": "Rapid Firecannon",
        "Needlessly Large Rod": "Guinsoo's Rageblade",
        "Tear of the Goddess": "Statikk Shiv",
        "Chain Vest": "Phantom Dancer",
        "Negatron Cloak": "Runaan's Hurricane",
        "Giant's Belt": "Titanic Hydra",
        "Spatula": "Blade of the Ruined King",
        "Sparring Glove": "Repeating Crossbow"
      },
      "Chain Vest": {
        "B.F. Sword": "Guardian Angel",
        "Recurve Bow": "Phantom Dancer",
        "Needlessly Large Rod": "Locket of the Iron Solari",
        "Tear of the Goddess": "Frozen Heart",
        "Chain Vest": "Thornmail",
        "Negatron Cloak": "Sword Breaker",
        "Giant's Belt": "Red Buff",
        "Spatula": "Warden's Mail",
        "Sparring Glove": "Iceborn Gauntlet"
      },
      "Giant's Belt": {
        "B.F. Sword": "Zeke's Herald",
        "Recurve Bow": "Titanic Hydra",
        "Needlessly Large Rod": "Morellonomicon",
        "Tear of the Goddess": "Redemption",
        "Chain Vest": "Red Buff",
        "Negatron Cloak": "Zephyr",
        "Giant's Belt": "Warmog's Armor",
        "Spatula": "Frozen Mallet",
        "Sparring Glove": "Trap Claw"
      },
      "Negatron Cloak": {
        "B.F. Sword": "The Bloodthirster",
        "Recurve Bow": "Runaan's Hurricane",
        "Needlessly Large Rod": "Ionic Spark",
        "Tear of the Goddess": "Hush",
        "Chain Vest": "Sword Breaker",
        "Negatron Cloak": "Dragon's Claw",
        "Giant's Belt": "Zephyr",
        "Spatula": "Talisman of Light",
        "Sparring Glove": "Quicksilver"
      },
      "Spatula": {
        "B.F. Sword": "Youmuu's Ghostblade",
        "Recurve Bow": "Blade of the Ruined King",
        "Needlessly Large Rod": "Inferno's Cinder",
        "Tear of the Goddess": "Mage's Cap",
        "Chain Vest": "Warden's Mail",
        "Negatron Cloak": "Talisman of Light",
        "Giant's Belt": "Frozen Mallet",
        "Spatula": "Force of Nature",
        "Sparring Glove": "Berserker Axe"
      },
      "Tear of the Goddess": {
        "B.F. Sword": "Spear of Shojin",
        "Recurve Bow": "Statikk Shiv",
        "Needlessly Large Rod": "Luden's Echo",
        "Tear of the Goddess": "Seraph's Embrace",
        "Chain Vest": "Frozen Heart",
        "Giant's Belt": "Redemption",
        "Negatron Cloak": "Hush",
        "Spatula": "Mage's Cap",
        "Sparring Glove": "Hand of Justice"
      },
      "Sparring Glove": {
        "B.F. Sword": "Infinity Edge",
        "Recurve Bow": "Repeating Crossbow",
        "Needlessly Large Rod": "Jeweled Gauntlet",
        "Tear of the Goddess": "Hand of Justice",
        "Chain Vest": "Iceborne Gauntlet",
        "Negatron Cloak": "Quicksilver",
        "Giant's Belt": "Trap Claw",
        "Spatula": "Berserker ",
        "Sparring Glove": "Thief's Gloves"


      }
    }

  }






// init Isotope
var $container = $('.grid').isotope({
  itemSelector: '.office-year-function'
});

// store filter for each group
var filters = {};


$('.items').on( 'click', '.resimli', function() {

duo = document.getElementsByClassName("chosen");

document.getElementById("resim").src = combs[0][0];

console.log(duo[1]);

});

$('.heading').on( 'click', '.item', function() {

  console.log("girdi");

$( ".heading" ).find('.selected' ).removeClass("selected");

$( this ).addClass('selected');

$(".champ").attr("style", "display:none");
$(".items").attr("style", "display:block");
document.getElementById("grid").style.opacity=0;

});


$('.heading').on( 'click', '.champion', function() {

  console.log("girdi");

$( ".heading" ).find('.selected' ).removeClass("selected");

$( this ).addClass('selected');


$(".champ").attr("style", "display:block");

document.getElementById("grid").style.opacity=1;
});


$('.filters').on( 'click', '.button', function() {
  var $this = $(this);
  // get group key
  var $buttonGroup = $this.parents('.button-group');
  var filterGroup = $buttonGroup.attr('data-filter-group');
  // set filter for group
  filters[ filterGroup ] = $this.attr('data-filter');
  // combine filters
  var filterValue = concatValues( filters );
  // set filter for Isotope
  $container.isotope({ filter: filterValue });
});

// change is-checked class on buttons
$('.button-group').each( function( i, buttonGroup ) {
  var $buttonGroup = $( buttonGroup );
  $buttonGroup.on( 'click', 'button', function() {
    $buttonGroup.find('.is-checked').removeClass('is-checked');
    $( this ).addClass('is-checked');
  });
});
  
// flatten object by concatting values
function concatValues( obj ) {
  var value = '';
  for ( var prop in obj ) {
    value += obj[ prop ];
  }
  return value;
}

  //****************************
  // Isotope Load more button
  //****************************
  var initShow = 1000; //number of items loaded on init & onclick load more button
  var counter = initShow; //counter for load more button
  var iso = $container.data('isotope'); // get Isotope instance
  var noOfClick = 0;
  var numItems = $('.office-year-function').length; // no. of event
  loadMore(initShow); //execute function onload

  function loadMore(toShow) {
    $container.find(".hidden").removeClass("hidden");

    var hiddenElems = iso.filteredItems.slice(toShow, iso.filteredItems.length).map(function(item) {
      return item.element;
    });
    $(hiddenElems).addClass('hidden');
    $container.isotope('layout');



  }
	
	
	
  //append load more button

  
  
  //when load more button clicked
  $("#load-more").click(function() {
    if ($('#filters').data('clicked')) {
      //when filter button clicked, set initial value for counter
      counter = initShow;
      $('#filters').data('clicked', false);
    } else {
      counter = counter;
    }
	
	//when load more button is clicked, show 6 more elements
    counter = counter + 6; 
	noOfClick++;
    loadMore(counter);
	
  });

  //when filter button clicked
  $("#filters").click(function() {
    $(this).data('clicked', true);

    loadMore(initShow);
  });