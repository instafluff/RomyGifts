require( "dotenv" ).config();
const fs = require( "fs" );
const gifts = fs.readFileSync( "gifts.txt" ).toString().split( "\r\n" ).filter( x => !!x );
console.log( gifts );

// D; <- this guy did interval. up to no good
// ;{> "it was the gopher in the coffee nook with a keyboard" - RedChrisMS
// o.o ; <- This is the guy that is going to kill you - Gilokk0

const ComfyJS = require( "comfy.js" );
ComfyJS.onCommand = ( user, command, message, flags, extra ) => {
  if( command === "giv" || command === "giveplz" || command === "lovemepls" || command === "lmp" ||
   	  command === "romanticcommandtogiftsomethingtoothers" || command === "rctgsto" ||
  	  /^a{2,}$/.exec( command ) ) {
    let gift = gifts[ Math.floor( gifts.length * Math.random() ) ];
    ComfyJS.Say( `${user} gave ${gift} to ${ message || "everyone" }!` );
  }
}
ComfyJS.onChat = ( user, message, flags, extra ) => {
  if( message.startsWith( "GivePLZ" ) || message.startsWith( "PrideGive" ) ) {
	  message = message.split( " " )[ 1 ];
    let gift = gifts[ Math.floor( gifts.length * Math.random() ) ];
	ComfyJS.Say( `${user} gave ${gift} to ${ message || "everyone" }!` );
  }
}
ComfyJS.Init( process.env.TWITCH_CHANNEL, process.env.TWITCH_OAUTH );
