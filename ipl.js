/* eslint-disable */

( function( app, cricket ) {
    'use strict';

    app.templates = {};
    app.common = {};
    app.widgets = {};
    app.defaultLanguage = 'EN';
    app.account = 'ipl';
    app.eventStructure = [ 'Round Robin', 'Eliminator', 'Qualifiers', 'Runner-up', 'Winner' ];
    app.socialMedia = {
        accounts: {
            facebook: 'IPL',
            instagram: 'ipl',
            twitter: 'IPL'
        },
        hashtag: 'VIVOIPL',
        urls: {
            facebook: 'https://facebook.com/',
            twitter: 'https://twitter.com/',
            instagram: 'https://instagram.com/'
        }
    };
    app.paths = [
        {
            label: 'local',
            domain: 'localhost',
            // cdn: "../../",
            cdn: 'dist/'
        },
        {
            label: 'bsk',
            domain: '10\.0\.(4|5)\.([0-9])+',
            // cdn: "dist/"
            cdn: '../../'
        },
        {
            label: 'development',
            canary: 'https://api.canary.platform.pulselive.com/production/',
            domain: 'dev-ipl.pulselive.com',
            cmsAccount: 15,
            api: '//api.dev.platform.iplt20.com/',
            cricketApi: '//cricketapi.dev.platform.iplt20.com/',
            // cricketApi: '//cricketapi.platform.iplt20.com/',
            trackingAPI: 'https://5f77vsjiq2.execute-api.us-east-1.amazonaws.com/dev/interactions',
            cdn: '/resources/ver/',
            playerImagePath: '//iplstatic.s3.amazonaws.com/players/2016/',
            canary2Feeds: '//datacdn.iplt20.com/dynamic/data/canary/'
        },
        {
            label: 'test',
            domain: 'test-ipl.pulselive.com',
            canary: 'https://api.canary.platform.pulselive.com/production/',
            cmsAccount: 15,
            api: '//api.test.platform.iplt20.com/',
            cricketApi: '//cricketapi.test.platform.iplt20.com/',
            trackingAPI: 'https://5f77vsjiq2.execute-api.us-east-1.amazonaws.com/test/interactions',
            cdn: '/resources/ver/',
            playerImagePath: '//iplstatic.s3.amazonaws.com/players/',
            canary2Feeds: '//datacdn.iplt20.com/dynamic/data/canary/'
        },
        {
            label: 'staging',
            domain: 'stage-ipl.pulselive.com',
            api: '//api.platform.iplt20.com/',
            cricketApi: '//cricketapi.test.platform.iplt20.com/',
            trackingAPI: 'https://5f77vsjiq2.execute-api.us-east-1.amazonaws.com/prod/interactions',
            canary: 'https://api.canary.platform.pulselive.com/production/',
            cmsAccount: 15,
            cdn: '/resources/ver/',
            playerImagePath: '//iplstatic.s3.amazonaws.com/players/',
            canary2Feeds: '//datacdn.iplt20.com/dynamic/data/canary/'
        },
        {
            label: 'production',
            domain: 'www.iplt20.com',
            api: '//api.platform.iplt20.com/',
            cricketApi: '//cricketapi.platform.iplt20.com/',
            trackingAPI: 'https://5f77vsjiq2.execute-api.us-east-1.amazonaws.com/prod/interactions',
            cmsAccount: 15,
            canary: 'https://api.canary.platform.pulselive.com/production/',
            cdn: '/resources/ver/',
            playerImagePath: '//iplstatic.s3.amazonaws.com/players/',
            canary2Feeds: '//datacdn.iplt20.com/dynamic/data/canary/'
        }
    ];

    app.checkEnvironment = function() {

        var location = window.location.hostname;
        var environment;

        app.paths.map( function( path ) {
            if( location === path.domain || location.match( new RegExp( path.domain ) ) ) {
                environment = path;
            }
        } );

        return environment || 'There are no app.paths defined for this domain';

    };

    app.environment = app.checkEnvironment();

    /************************
     * CRICKET CONFIGURATION
     */
    app.metadata = [

        {
            id: 7749,
            tournamentName: 'ipl2018',
            year: '2018',
            supportsPlayerLinks: true,
            supportsVideoInCommentary: true,


            teams: [ 1, 3, 4, 5, 6, 8, 9, 62 ],
            // Playoffs
            playoffs: {
                'ipl2018-57': {
                    description: 'Qualifier 1',
                    team1name: '1st Place Group Stage',
                    team2name: '2nd Place Group Stage',
                    progressionIndex: 2
                },
                'ipl2018-58': {
                    description: 'Eliminator',
                    team1name: '3rd Place Group Stage',
                    team2name: '4th Place Group Stage',
                    progressionIndex: 1
                },
                'ipl2018-59': {
                    description: 'Qualifier 2',
                    team1name: 'Qualifier 1 Losers',
                    team2name: 'Eliminator Winners',
                    progressionIndex: 2
                },
                'ipl2018-60': {
                    description: 'Final',
                    team1name: 'Qualifier 1 Winners',
                    team2name: 'Qualifier 2 Winners',
                    progressionIndex: 3
                }
            },

            supportsMC: true,
            commentaryFilter: true,
            standingsMessage: ''
        },

        {
            id: 5815,
            tournamentName: 'ipl2017',
            year: '2017',
            supportsPlayerLinks: true,
            supportsVideoInCommentary: true,

            teams: [ 3, 433, 4, 5, 6, 434, 9, 62 ],
            // Playoffs
            playoffs: {
                'ipl2017-57': {
                    description: 'Qualifier 1',
                    team1name: '1st Place Group Stage',
                    team2name: '2nd Place Group Stage',
                    progressionIndex: 2
                },
                'ipl2017-58': {
                    description: 'Eliminator',
                    team1name: '3rd Place Group Stage',
                    team2name: '4th Place Group Stage',
                    progressionIndex: 1
                },
                'ipl2017-59': {
                    description: 'Qualifier 2',
                    team1name: 'Qualifier 1 Losers',
                    team2name: 'Eliminator Winners',
                    progressionIndex: 2
                },
                'ipl2017-60': {
                    description: 'Final',
                    team1name: 'Qualifier 1 Winners',
                    team2name: 'Qualifier 2 Winners',
                    progressionIndex: 3
                }
            },

            supportsMC: true,
            commentaryFilter: true,
            standingsMessage: ''
        },

        {
            id: 3957,
            tournamentName: 'ipl2016',
            year: '2016',
            supportsPlayerLinks: false,
            supportsVideoInCommentary: true, // @TODO change to true before launch

            teams: [ 3, 433, 4, 5, 6, 434, 9, 62 ],

            // Playoffs
            playoffs: {
                'ipl2016-57': {
                    description: 'Qualifier 1',
                    team1name: '1st Place Group Stage',
                    team2name: '2nd Place Group Stage',
                    progressionIndex: 2
                },
                'ipl2016-58': {
                    description: 'Eliminator',
                    team1name: '3rd Place Group Stage',
                    team2name: '4th Place Group Stage',
                    progressionIndex: 1
                },
                'ipl2016-59': {
                    description: 'Qualifier 2',
                    team1name: 'Qualifier 1 Losers',
                    team2name: 'Eliminator Winners',
                    progressionIndex: 2
                },
                'ipl2016-60': {
                    description: 'Final',
                    team1name: 'Qualifier 1 Winners',
                    team2name: 'Qualifier 2 Winners',
                    progressionIndex: 3
                }
            },

            supportsMC: true,
            commentaryFilter: true,
            standingsMessage: ''
        },

        {
            id: 2785,
            tournamentName: 'ipl2015',
            year: '2015',
            supportsPlayerLinks: true,
            supportsVideoInCommentary: true,

            teams: [ 1, 3, 4, 5, 6, 8, 9, 62 ],

            // Playoffs
            playoffs: {
                'ipl2015-57': {
                    description: 'Qualifier 1',
                    team1name: '1st Place Group Stage',
                    team2name: '2nd Place Group Stage',
                    progressionIndex: 2
                },
                'ipl2015-58': {
                    description: 'Eliminator',
                    team1name: '3rd Place Group Stage',
                    team2name: '4th Place Group Stage',
                    progressionIndex: 1
                },
                'ipl2015-59': {
                    description: 'Qualifier 2',
                    team1name: 'Qualifier 1 Losers',
                    team2name: 'Eliminator Winners',
                    progressionIndex: 2
                },
                'ipl2015-60': {
                    description: 'Final',
                    team1name: 'Qualifier 1 Winners',
                    team2name: 'Qualifier 2 Winners',
                    progressionIndex: 3
                }
            },

            supportsMC: true,
            commentaryFilter: true,
            standingsMessage: 'All teams play 14 matches. Top 4 advance to Play-offs.'
        },
        {
            id: 2374,
            tournamentName: 'ipl2014',
            year: '2014',

            supportsPlayerLinks: true,

            teams: [ 1, 3, 4, 5, 6, 8, 9, 62 ],

            // Playoffs
            playoffs: {
                'ipl2014-57': {
                    description: 'Qualifier 1',
                    team1name: '1st Place Group Stage',
                    team2name: '2nd Place Group Stage',
                    progressionIndex: 2
                },
                'ipl2014-58': {
                    description: 'Eliminator',
                    team1name: '3rd Place Group Stage',
                    team2name: '4th Place Group Stage',
                    progressionIndex: 1
                },
                'ipl2014-59': {
                    description: 'Qualifier 2',
                    team1name: 'Qualifier 1 Losers',
                    team2name: 'Eliminator Winners',
                    progressionIndex: 2
                },
                'ipl2014-60': {
                    description: 'Final',
                    team1name: 'Qualifier 1 Winners',
                    team2name: 'Qualifier 2 Winners',
                    progressionIndex: 3
                }

            },
            supportsMC: true,
            commentaryFilter: true,
            standingsMessage: 'All teams play 14 matches. Top 4 advance to Play-offs.'
        },

        {
            id: 605,
            tournamentName: 'ipl2013',
            year: '2013',

            teams: [ 1, 3, 4, 5, 6, 7, 8, 9, 62 ],

            playoffs: {
                'ipl2013-73': {
                    description: 'Qualifier 1',
                    team1name: '1st Place Group Stage',
                    team2name: '2nd Place Group Stage',
                    progressionIndex: 2
                },
                'ipl2013-74': {
                    description: 'Eliminator',
                    team1name: '3rd Place Group Stage',
                    team2name: '4th Place Group Stage',
                    progressionIndex: 1
                },
                'ipl2013-75': {
                    description: 'Qualifier 2',
                    team1name: 'Qualifier 1 Losers',
                    team2name: 'Eliminator Winners',
                    progressionIndex: 2
                },
                'ipl2013-76': {
                    description: 'Final',
                    team1name: 'Qualifier 1 Winners',
                    team2name: 'Qualifier 2 Winners',
                    progressionIndex: 3
                }
            },
            supportsMC: true,
            commentaryFilter: false,
            standingsMessage: 'All teams play 16 matches. Top 4 advance to Play-offs.'
        },

        {
            id: 1,
            tournamentName: 'ipl2012',
            year: '2012',

            playoffs: {
                'ipl2012-73': {
                    description: 'Qualifier 1',
                    team1name: '1st Place Group Stage',
                    team2name: '2nd Place Group Stage',
                    progressionIndex: 2
                },
                'ipl2012-74': {
                    description: 'Eliminator',
                    team1name: '3rd Place Group Stage',
                    team2name: '4th Place Group Stage',
                    progressionIndex: 1
                },
                'ipl2012-75': {
                    description: 'Qualifier 2',
                    team1name: 'Qualifier 1 Losers',
                    team2name: 'Eliminator Winners',
                    progressionIndex: 2
                },
                'ipl2012-76': {
                    description: 'Final',
                    team1name: 'Qualifier 1 Winners',
                    team2name: 'Qualifier 2 Winners',
                    progressionIndex: 3
                }
            },
            supportsMC: true,
            commentaryFilter: false,
            standingsMessage: 'All teams played 16 matches. Top 4 advanced to Play-offs.'
        },

        {
            id: 81,
            tournamentName: 'ipl2011',
            year: '2011',

            playoffs: {
                'ipl2011-71': {
                    description: 'Qualifier 1',
                    team1name: '1st Place Group Stage',
                    team2name: '2nd Place Group Stage',
                    progressionIndex: 2
                },
                'ipl2011-72': {
                    description: 'Eliminator',
                    team1name: '3rd Place Group Stage',
                    team2name: '4th Place Group Stage',
                    progressionIndex: 1
                },
                'ipl2011-73': {
                    description: 'Qualifier 2',
                    team1name: 'Qualifier 1 Losers',
                    team2name: 'Eliminator Winners',
                    progressionIndex: 2
                },
                'ipl2011-74': {
                    description: 'Final',
                    team1name: 'Qualifier 1 Winners',
                    team2name: 'Qualifier 2 Winners',
                    progressionIndex: 3
                }
            },
            supportsMC: false,
            standingsMessage: 'All teams played 14 matches. Top 4 advanced to Play-offs.'
        },

        {
            id: 80,
            tournamentName: 'ipl2010',
            year: '2010',

            playoffs: {
                'ipl2010-57': {
                    description: '1st Semi Final',
                    team1name: '1st Place Group Stage',
                    team2name: '2nd Place Group Stage',
                    progressionIndex: 2
                },
                'ipl2010-58': {
                    description: '2nd Semi Final',
                    team1name: '3rd Place Group Stage',
                    team2name: '4th Place Group Stage',
                    progressionIndex: 2
                },
                'ipl2010-59': {
                    description: '3rd Place Playoff',
                    team1name: 'Qualifier 1 Losers',
                    team2name: 'Qualifier 2 Losers',
                    progressionIndex: 2
                },
                'ipl2010-60': {
                    description: 'Final',
                    team1name: 'Qualifier 1 Winners',
                    team2name: 'Qualifier 2 Winners',
                    progressionIndex: 3
                }
            },
            supportsMC: false,
            standingsMessage: 'All teams played 14 matches. Top 4 advanced to Knockouts.'
        },

        {
            id: 79,
            tournamentName: 'ipl2009',
            year: '2009',

            playoffs: {
                'ipl2009-57': {
                    description: 'Semi Final 1',
                    team1name: '3rd Place Group Stage',
                    team2name: '4th Place Group Stage',
                    progressionIndex: 2
                },
                'ipl2009-58': {
                    description: 'Semi Final 2',
                    team1name: 'Qualifier 1 Losers',
                    team2name: 'Eliminator Winners',
                    progressionIndex: 2
                },
                'ipl2009-59': {
                    description: 'Final',
                    team1name: 'Qualifier 1 Winners',
                    team2name: 'Qualifier 2 Winners',
                    progressionIndex: 3
                }
            },
            supportsMC: false,
            standingsMessage: 'All teams played 14 matches. Top 4 advanced to Knockouts.'
        },

        {
            id: 78,
            tournamentName: 'ipl2008',
            year: '2008',

            playoffs: {
                'ipl2008-57': {
                    description: 'Semi Final 1',
                    team1name: '3rd Place Group Stage',
                    team2name: '4th Place Group Stage',
                    progressionIndex: 2
                },
                'ipl2008-58': {
                    description: 'Semi Final 2',
                    team1name: 'Qualifier 1 Losers',
                    team2name: 'Eliminator Winners',
                    progressionIndex: 2
                },
                'ipl2008-59': {
                    description: 'Final',
                    team1name: 'Qualifier 1 Winners',
                    team2name: 'Qualifier 2 Winners',
                    progressionIndex: 3
                }
            },
            supportsMC: false,
            standingsMessage: 'All teams played 14 matches. Top 4 advanced to Knockouts.'
        },

        {
            id: 3929,
            tournamentName: 'ipl',
            year: '',

            isGroup: true,

            supportsPlayerLinks: false,

            teams: [ 3, 433, 4, 5, 6, 434, 9, 62 ],
            // Playoffs
            playoffs: {},

            supportsMC: false,
            commentaryFilter: false,
            standingsMessage: ''
        }

    ];

    app.activeTeams = [ 1, 3, 4, 5, 6, 8, 9, 62 ];

    app.supportedYears = $.map( $.grep( app.metadata, function( t ) {
        return!t.isGroup;
    } ), function( tourn, i ) {
        return tourn.year;
    } );

    app.cricketStore = cricket.Store.getInstance();
    app.cricketUrlFactory = cricket.APIUrlFactory.getInstance( {
        apiPath: app.environment.cricketApi
    } );

    // Create all tournaments supported
    for( var i = 0, iLimit = app.metadata.length; i < iLimit; i++ ) {
        var tournamentMetadata = app.metadata[ i ];
        var tournament = app.cricketStore.getTournament( tournamentMetadata.id );
        tournament.setData( tournamentMetadata );

        // first tournament in the metadata is always the current tournament
        if( !app.currentTournament ) {
            app.currentTournament = tournament;
        }
    }

    app.getMetadataByTournamentName = function( tournamentName ) {
        for( var i = 0; i < app.metadata.length; i++ ) {
            var metadata = app.metadata[ i ];
            if( metadata.tournamentName === tournamentName ) {
                return metadata;
            }
        }
    };

}( PULSE.app, PULSE.cricket ) );

( function( app, core, cricket ) {
    
    'use strict';

    app.dataManager = {};

    app.DATA_EVENTS = {
        FIXTURES: 'fixtures/list',
        SCORING: 'fixtures/scoring'
    };

    var feeds = {};

    var FEED_STATUSES = {
        WAITING: 'waiting',
        RECEIVED: 'received'
    };

    app.dataManager.get = function( options, force ) {
        if( force || !feeds[ options.url ] || FEED_STATUSES.WAITING !== feeds[ options.url ] ) {
            core.data.manager.add( {
                url: options.url,
                callback: this.onData,
                target: this,
                headers: [ { label: 'account', value: app.account } ]
            } );
        }
    };

    app.dataManager.onData = function( data, config ) {

    };

}( PULSE.app, PULSE.core, PULSE.cricket ) );
/*globals PULSE, PULSE.app, PULSE.core */


(function( app, core ){
	"use strict";

	app.I18N = {};

	app.I18N.setup = function(){
		var req_language = core.localStorage.getStorage( 'req_language', true );
	    app.language = req_language || app.defaultLanguage;
	    var Translator = new app.I18N.Translator( PULSE.I18N );

	    if (!PULSE.I18N) { PULSE.I18N = {}; }
	    PULSE.I18N.lookup = function()
	    {
	        return Translator.lookup.apply( Translator, arguments );
	    };
	    if( typeof window.moment !== 'undefined' )
	    {
	        app.I18N.enOverride();
	        moment.locale( app.language );
	    }
	};

	app.I18N.enOverride = function() {
	    moment.locale( 'en',
	    {
	        longDateFormat : {
	            LT: "HH:mm",
	            // LT: "h:mm A",
	            LTS: "h:mm:ss A",
	            l : 'DD/MM',
	            L: "DD/MM/YYYY",
	            ll: 'D MMMM',
	            LL: "D MMMM YYYY",
	            lll: "MMM D YYYY LT",
	            LLL: "MMMM Do YYYY LT",
	            llll: "ddd MMM D YYYY",
	            LLLL: "dddd, MMMM Do YYYY"
	        },
	        yearFirst: false
	    } );
	};


	app.I18N.Translator = function( translationsData )
	{
		var _self = this;

	    _self.hasTranslations = false;
	    _self.language = app.language;

	    if( translationsData )
	    {
	        _self.hasTranslations = true;
	        if( _self.language !== translationsData.language )
	        {
	            if( translationsData.language === undefined )
	            console.log( 'Language mismatch! Using ' + translationsData.language );
	            _self.language = translationsData.language;
	        }

	        _self.translations = translationsData.translations || {};
	        _self.hasTranslations = true;
	    }
	    else
	    {
	        _self.hasTranslations = false;
	        _self.translations = {};
	    }
	};

	app.I18N.Translator.prototype.lookup = function( key, replaceMap )
	{
		var _self = this;
	    if( key )
	    {
	        var mapping = _self.lookupKey( key );
	        if( replaceMap )
	        {
	            for( var replaceKey in replaceMap )
	            {
	                var regExp = new RegExp( "\\${" + replaceKey + "}", "gi" );
	                mapping = mapping.replace( regExp, replaceMap[ replaceKey ] );
	            }
	        }

	        return mapping;
	    }

	    return "";
	};

	app.I18N.Translator.prototype.lookupKey = function( key )
	{
		var _self = this;
	    if( _self.hasTranslations )
	    {
	        return _self.translations[ key ] || key;
	    }
	    else
	    {
	        return key;
	    }
	};


}( PULSE.app, PULSE.core ));

( function( app ){

    "use strict";

    /**
     * Map of media query size labels to screen widths
     * Mirrors what's in src/styles/layout/_mq.scss so the JS & CSS use the same values
     */
    app.measurements = {
        mobile: 400,
        phablet: 640,
        tablet: 840,
        desktop: 1025,
        wide: 1300
    };

}( PULSE.app ) );

( function( app, core, common, cricket ) {

    'use strict';

    var ONE_MINUTE = 60000;
    var ONE_HOUR = 3600000;
    var ONE_DAY = 86400000;

    app.templating = {};

    /**
     * Get generic date
     * @param {String} date the ISO date format as it comes from the API
     * @return {String} the formatted date in DD MMM YY format
     */
    var getDateNice = function( date ) {
        var momentDate = moment( date ).utc();

        return momentDate.format( 'DD MMM YY' );
    };

    app.templating.scoreToString = function( inningsSummaries ) {
        return inningsSummaries.map( function( summary ) {
            return cricket.utils.getInningsScore( summary.runs, summary.wkts, summary.allOut, summary.declared );
        } ).join( ' & ' );
    };

    /**
     * Given a score string, wraps the runs value in a span tag
     * @param  {String} scoreString score string
     * @return {String}             score string with runs wrapped in a span tag
     */
    app.templating.wrapRunsInSpan = function( scoreString ) {
        if( scoreString ) {
            var splitScore = scoreString.split( PULSE.cricket.config.scoreDelimiter );
            return'<span>' + splitScore[ 0 ] + '</span>' + ( splitScore[ 1 ] ? ( '/' + splitScore[ 1 ] ) : '' );
        }
        return'';
    };

    app.templating.getProgressBarsModel = function( match, teamIndex ) {
        var model = {
            overs: []
        };

        if( [ 'U', 'E' ].indexOf( match.currentState.phase ) === -1 ) {
            var team = match.getTeam( teamIndex );
            var overProgress = team.score && team.score[ 0 ] ? team.score[ 0 ].overProgress : '';
            var overFraction = Math.ceil( parseFloat( overProgress, 10 ) );
            for( var i = 0; i < match.data.scoring.matchInfo.oversLimit; i++ ) {
                model.overs.push( {
                    number: i + 1,
                    current: match.teamIsBatting( teamIndex ) && ( i + 1 === overFraction ),
                    complete: i + 1 <= overFraction
                } );
            }
        }
        return model;
    };

    /**
     * Custom templating helper that breaks team names on where the shortName begins
     * (or ends, if the short name is at the beginning of the name)
     * @param  {String} fullName  the team full name
     * @param  {String} shortName the team short name
     * @return {String}           the new full name, with a line break character
     */
    app.templating.breakOnShortName = function( fullName, shortName ) {
        var index = fullName.indexOf( shortName );
        if( index > -1 ) {
            if( index === 0 ) {
                index = shortName.length;
            }
            return fullName.slice( 0, index ) + '<br>' + fullName.slice( index );
        }
        return fullName;
    };

    /**
     * date age helper function
     * @param {string} date - expects date as string
     * @return {string}
     */
    var dateAge = function( date ) {

        var output = '';

        if( date ) {
            date = typeof date === 'string' ? core.date.parseString( date ) : new Date( date );
            date = moment( date ).utc();

            var diff = moment().format( 'x' ) - date;

            var dateAge = 'old';
            if( diff < ONE_DAY ) {
                dateAge = 'new';
            }

            var current, hours, mins, hoursLabel, minsLabel;
            current = diff;
            hours = Math.floor( current / ONE_HOUR );
            mins = Math.round( ( current / ONE_MINUTE ) % 60 );

            // output difference of current date and published date
            if( hours > 0 ) {
                hoursLabel = hours === 1 ? 'hr' : 'hrs';
                output = hours + ' ' + hoursLabel + ' ';
            }
            minsLabel = mins === 1 ? 'min' : 'mins';
            output += mins + ' ' + minsLabel + ' ago';

            // if date is old override output
            if( dateAge === 'old' ) {
                output = getDateNice( new Date( date ) );
            }

            return output;
        }
        return''; // return nothing in false case
    };

    /**
     * Parses an HTML string to an actual element
     *
     * @param {String} htmlString - HTML string you want to parse to an HTML element
     */
    var stringToElement = function( htmlString ) {

        var d = document.createElement( 'div' );
        d.innerHTML = htmlString.trim();
        return d.firstChild;
    };

    var scoreToString = function( inningsSummaries ) {
        return inningsSummaries.map( function( summary ) {
            return cricket.utils.getInningsScore( summary.runs, summary.wkts, summary.allOut, summary.declared );
        } ).join( ' & ' );
    };

    var getFormattedDate = function( match, timezone, dateFormat ) {
        var date = match.date;
        if( date ) {
            var momentDate = moment( date );
            switch( timezone ) {
                case'BST':
                    return momentDate.utc().add( 1, 'hours' ).format( dateFormat );
                case'local':
                    return moment( date ).utc().add( match.timezoneOffset, 'hours' ).format( dateFormat );
                // case 'GMT':
                default:
                    return momentDate.utc().format( dateFormat );

            }
        }
        return'';
    };

    var buildDescription = function() {
        var description = '';
        if( arguments && arguments.length ) {
            description = Array.prototype.filter.call( arguments, function( arg ) {
                return typeof arg !== 'undefined' && arg;
            } ).join( ', ' );
        }
        return description;
    };

    var getVenueString = function( venue ) {
        var venueString = 'TBC';
        if( venue && venue.fullName !== 'TBC' ) {
            venueString = venue.shortName || venue.fullName;
            if( venue.city ) {
                venueString += ', ' + venue.city;
            }
        }
        return venueString;
    };

    var getMatchTypeLabel = function( matchType ) {
        switch( matchType ) {
            case'TEST':
                return'Test';
            case'FIRST_CLASS':
                return'First Class';
            case'LIST_A':
                return'List A';
            case'ODI':
                return'ODI';
            case'T20':
                return'T20';
            case'T20I':
                return'T20I';
            case'WODI':
                return'ODI';
            case'WT20':
                return'T20';
            case'WT20I':
                return'T20I';
            default:
                return matchType;
        }
    };

    /**
     * Can only be used with Scoring Publication data, returns a user-friendly string for the
     * description of the innings (e.g., "England 1st Innings")
     * @param  {cricket.Match} match - the match
     * @param  {Number} inningsIndex - the index of the innings
     * @return {String}              - the user-facing string
     */
    var getInningsLabel = function( match, inningsIndex ) {
        if( match && match.getBattingOrder().length ) {
            inningsIndex = inningsIndex > -1 ? inningsIndex : ( match.currentState.currentInningsIndex || 0 );
            var team = match.getTeam( match.getBattingOrder()[ inningsIndex ] );
            if( match.isLimitedOvers() ) {
                return( team.shortName || team.fullName ) + ' Innings';
            }

            var inningsOrdinal = inningsIndex > 1 ? ' 2nd ' : ' 1st ';
            return( team.shortName || team.fullName ) + inningsOrdinal + 'Innings';
        }
        return'';
    };

    var getPlayerHeadshotUrl = function( playerId, matchType, extension, size ) {

        extension = extension || 'png';
        size = size || '480x480';

        switch( matchType ) {
            case'TEST':
                return'https://icc-resources.s3.amazonaws.com/player-photos/test/' + size + '/' + playerId + '.' + extension;
            case'ODI':
                return'https://icc-resources.s3.amazonaws.com/player-photos/odi/' + size + '/' + playerId + '.' + extension;
            case'T20I':
                return'https://icc-resources.s3.amazonaws.com/player-photos/t20i/' + size + '/' + playerId + '.' + extension;
            default:
                return'https://icc-resources.s3.amazonaws.com/player-photos/test/' + size + '/photo-missing.png';
        }
    };

    var getMatchDateRange = function( match, format ) {

        var dateFormatShort = format || 'ddd D';
        var dateFormat = format || 'ddd D MMMM';


        if( match.getEndDate && match.date.getDate() != match.endDate.getDate() ) {
            if( match.date.getMonth() === match.endDate.getMonth() ) {
                return moment( match.date ).format( dateFormatShort ) + ' - ' + moment( match.endDate ).format( dateFormat );
            }
            return moment( match.getDate() ).format( dateFormat ) + ' - ' + moment( match.getEndDate() ).format( dateFormat );
        }
        return moment( match.getDate() ).format( dateFormat );
    };

    var getDateDiff = function ( start, end, measurement ) {
        measurement = measurement || 'days';
        var startDate = moment( start );
        var endDate = moment( end );
        return endDate.diff( startDate, measurement );
    };

    /**
     * Prints a number with commas
     * @param  {Number} number Number value to print with commas as thousands
     * @return {String}        Converted value with commas
     */
    var getNumberWithCommas = function( number ) {
        return number.toString().replace( /\B(?=(\d{3})+(?!\d))/g, ',' );
    };

    /**
	 * Get duration in time format mm:ss
	 *
	 * @param {Int} number of seconds
	 * @returns {String} output duration in format mm:ss
	 */
    var durationToTime = function( duration ) {
        var sec_num = parseInt( duration, 10 );

        if( sec_num ) {
            var hours = Math.floor( sec_num / 3600 );
            var minutes = Math.floor( ( sec_num - ( hours * 3600 ) ) / 60 );
            var seconds = sec_num - ( hours * 3600 ) - ( minutes * 60 );

            if( hours < 10 ) { hours = '0' + hours; }
            if( minutes < 10 ) { minutes = '0' + minutes; }
            if( seconds < 10 ) { seconds = '0' + seconds; }

            var minSec = minutes + ':' + seconds;

            return hours > 0 ? hours + ':' + minSec : minSec;
        }

        return'00:00';

    };

    /**
     * Generates a match summary string based on the match data
     * @param  {cricket.Match} match instance of a match (Pulse Cricket v2)
     * @return {String}       the match summary string
     */
    var getMatchSummary = function( match ) {
        var _self = this;

        var text = null;
        var phase = match.currentState.phase;

        if( match.matchSummary ) {
            text = match.matchSummary;
        }
        else if( match.matchStatus && match.matchStatus.text ) {
            text = match.matchStatus.text;
        }
        else{
            switch( phase ) {
                // UPCOMING OR PLAY NOT STARTED (PRE-MATCH)
                case'U':
                case'E':
                    var toss = match.additionalInfo ? match.getToss() : null;
                    var cutoffOffset = 518400000; // six days
                    if( toss ) {
                        text = 'Toss winners are ' + toss;
                    }
                    else{
                        var timeDifference = match.date.getTime() - Date.now();
                        if( timeDifference > cutoffOffset || timeDifference < -cutoffOffset ) {
                            text = moment( match.date ).format( 'dddd, MMMM Mo' );
                            if( match.date.getFullYear() !== new Date().getFullYear() ) {
                                text += ' ' + match.date.getFullYear();
                            }
                            text += ' at <span>' + getFormattedDate( match, 'local', 'h:mma' ) + ' IST</span>';
                            text += ' (' + getFormattedDate( match, 'GMT', 'h:mma' ) + ' GMT)';
                        }
                        else{
                            text = moment( match.date ).calendar();
                        }
                    }
                    break;
                    // PLAY HAS ENDED (POST-MATCH) OR COMPLETE
                case'O':
                case'C':
                    text = match.matchStatus ? match.matchStatus.text : '';
                    break;
                    // BETWEEN INNINGS
                case'12':
                case'23':
                case'34':
                    text = 'Innings break';
                    break;
                    // DURING INNINGS
                default: // Live
                    text = match.getInningsSummaryText() || '';
                    break;
            }
        }
        return text;
    };

    /**
     * Gets the innings object in a tie breaker situation for a given team
     * @param  {cricket.Match} match     the match
     * @param  {Number}        teamIndex the index of the team (0 or 1)
     * @return {Object}                  the innings object
     */
    var getTieBreakerInningsForTeam = function( match, teamIndex ) {
        if( match.tieBreaker && match.data.scoring ) {
            var innings = match.data.scoring.tieBreaker.innings;
            var battingOrder = match.data.scoring.matchInfo.tieBreaker.battingOrder;
            var innsIndex = battingOrder[ 0 ] === teamIndex ? 0 : 1;

            return innings[ innsIndex ];
        }
    };

    /**
     * Returns the score string for a team within a tie breaker situation
     * @param  {cricket.Match} match     the cricket match instance
     * @param  {Number}        teamIndex the index of the team (0 or 1)
     * @return {String}                  the score, or empty string if there's no score for that team
     */
    var getTieBreakerScoreForTeam = function( match, teamIndex ) {
        var teamInns = getTieBreakerInningsForTeam( match, teamIndex );
        if( teamInns && teamInns.scorecard ) {
            return cricket.utils.getInningsScore( teamInns.scorecard.runs, teamInns.scorecard.wkts,
                teamInns.scorecard.allOut, teamInns.declared );
        }
        return'';
    };

    /**
     * Helper for pluralisation of nouns
     * @param {Number} number - the number to base the logic off of
     * @param {String} singular - the singular version of the noun
     * @param {String} plural - the plural version of the noun
     * @param {Boolean} includeNumber - whether to prepend the number to the output string or not
     */
    var pluralise = function( number, singular, plural, includeNumber ) {
        var string = includeNumber ? number + ' ' : '';
        return string + ( number.toString() === '1' ? singular : plural );
    };

    /**
     * object with all helper functions for underscore templates
     */
    app.templating.helper = {
        dateAge: dateAge,
        getPlayerHeadshotUrl: getPlayerHeadshotUrl,
        getDateDiff: getDateDiff,
        durationToTime: durationToTime,
        getDateNice: getDateNice,
        getNumberWithCommas: getNumberWithCommas,
        buildDescription: buildDescription,
        pluralise: pluralise,
        cricket: {
            getInningsLabel: getInningsLabel,
            getMatchTypeLabel: getMatchTypeLabel,
            getVenueString: getVenueString,
            scoreToString: scoreToString,
            getFormattedDate: getFormattedDate,
            getMatchDateRange: getMatchDateRange,
            getMatchSummary: getMatchSummary,
            getTieBreakerInningsForTeam: getTieBreakerInningsForTeam,
            getTieBreakerScoreForTeam: getTieBreakerScoreForTeam
        }
    };

    app.templating.getVideoDuration = function( duration ) {
        return app.common.durationToTime( duration );
    };

    /**
     * Splits text at the space to render the remaining string in bold
     * @param  {String} text Text string, which is to be split at the space
     * @return {Object}      Returns an object with reference to the string + the bold text
     */
    app.templating.splitStringBold = function( text ) {
        var string = text.split( ' ' ) || '';
        var bold = '';

        if( string && string.length > 1 ) {
            bold = string[ string.length - 1 ];
            string.pop();
        }

        return{
            string: string,
            bold: bold
        };
    };

    /**
     * Produces the correct format for UI arguments required for a video modal
     *
     * @param {ContntResponse} video - the video object from the API
     * @return {String} - stringified JSON object for the UI arguments
     */
    app.templating.getVideoUIArgs = function( video ) {
        var uiArgs = {
            contentId: video.id,
            mediaId: video.mediaId,
            mediaTitle: video.title,
            link: video.link,
            mediaDescription: video.summary || '',
            date: getDateNice( video.publishFrom ) || ''
        };
        return _.escape( JSON.stringify( uiArgs ) );
    };

    /**
     * Stringifies & escapes strings so they can be put into HTML
     * @param  {String} string the string to clean
     * @return {String}        output
     */
    app.templating.cleanString = function( string ) {
        return _.escape( JSON.stringify( string || '' ) );
    };

    /**
     * Renders a template with the given data and returns the compiled template
     *
     * @param {Object}  data              - data to render in JSON format
     * @param {String}  templateName      - the name of the template (must match file name)
     * @param {Boolean} parseToHtmlObject - parse the rendered template string to an HTML object - default false
     * @return {(String|DOMElement)}      - Rendered template with model
     */
    app.templating.render = function( model, templateName, parseToHtmlObject ) {
        var renderedTemplate = '';

        model = model || {};
        for( var func in app.templating ) {
            if( app.templating.hasOwnProperty( func ) ) {
                model[ func ] = app.templating[ func ];
            }
        }
        model.urlUtil = {
            generateUrl: app.common.generateUrl
        };
        model.helper.url = {
            generateUrl: app.common.generateUrl,
            getMatchURL: app.common.getMatchURL,
            getTeamURL: app.common.getTeamURL,
            getPlayerURL: app.common.getPlayerURL,
            getVenueUrl: common.getVenueUrl
        };
        model.contentUtil = app.common.content;
        model.imageUtil = app.common.image;

        if( templateName ) {
            var templateEngine = app.templates[ templateName ];
            if( templateEngine ) {
                try{
                    renderedTemplate = templateEngine( model );
                }
                catch( error ) {
                    if( error.message ) {
                        error.message += ' in template ' + templateName;
                    }
                    console.warn( error );
                    console.info( 'Model given', model );
                }
                if( parseToHtmlObject ) {
                    return stringToElement( renderedTemplate );
                }
            }
            else{
                console.warn( 'No template was rendered. Template not found: ' + templateName );
            }
        }
        return renderedTemplate;
    };

}( PULSE.app, PULSE.core, PULSE.app.common, PULSE.cricket ) );

/*globals PULSE, PULSE.app */

(function( app ){
	"use strict";

	app.widgetDeps = function(){

		var environment = app.checkEnvironment();
		var els = document.querySelectorAll( '[data-script]' );
		var deps = [];
		var scriptPrefix = app.environment.cdn + "widgets/";
		var scriptSuffix = app.environment.label === "production" ? ".min.js" : ".js";

		Array.prototype.map.call( els, function( el ){
            el.getAttribute( 'data-script' ).split(',').forEach( function( s ) {
                s = s ? s.trim() : undefined;
                if( s ) {
                    addDependency( s );
                }
            } );
		} );

		function addDependency( dep ){
			if( deps.indexOf( dep ) < 0 ){
				deps.push( dep );
				var script = document.createElement( 'script' );
				script.type = 'text/javascript';
				script.src = scriptPrefix + dep + scriptSuffix;
				document.body.appendChild( script );
			}
		}
	};

}( PULSE.app ));

/*globals PULSE, PULSE.app */

( function( app ) {
    'use strict';

    var BASE_TEN = 10;

    /**
     * Static component that should be used to initialise one or more widgets on the page
     */
    app.widgetInitialiser = {};
    var dataManager = null;

    /**
     * Adds a single instance of the given widget (will replace any existing instances)
     * @param {String} widgetMarker the name of the data-widget attribute to query for in order to find the widget
     * @param {Object} widgetConstructor optional, the class to create a new instance of for the
     *  widget. If this is not set, it will be derived from the widgetMarker
     * @param {DOMElement} domScope optional override (instead of querying the whole document)
     */
    app.widgetInitialiser.addWidget = function( widgetMarker, widgetConstructor, domScope ) {
        var element = domScope || document;
        var Constructor = widgetConstructor || app[ getConstructorName( widgetMarker ) ];
        var widgetContainer = element.querySelector( '[data-widget="' + widgetMarker + '"]' );
        if( widgetContainer && widgetContainer.getAttribute( 'data-initialised' ) !== 'true' ) {

            var tournament = getTournament( widgetContainer );

            app.widgets[ widgetMarker ] = new Constructor( widgetContainer, tournament );
            widgetContainer.setAttribute( 'data-initialised', true );

            dataManager = PULSE.CLIENT.getDataManager();
            dataManager.startAll();
        }
    };

    /**
     * Creates an array of widgets for every instance of the HTML marker that is found on the page
     * @param {String} widgetMarker the name of the data-widget attribute to query for in order to find the widgets
     * @param {Object} widgetConstructor optional, the class to create a new instance of for the
     *  widget. If this is not set, it will be derived from the widgetMarker
     * @param {DOMElement} domScope optional override (instead of querying the whole document)
     */
    app.widgetInitialiser.addMultipleWidgetsByName = function( widgetMarker, widgetConstructor, domScope ) {
        var element = domScope || document;
        var Constructor = widgetConstructor || app[ getConstructorName( widgetMarker ) ];
        var widgetContainers = element.querySelectorAll( '[data-widget="' + widgetMarker + '"]' );
        for( var i = 0; i < widgetContainers.length; i++ ) {
            createWidget( widgetMarker, widgetContainers[ i ], Constructor );
        }

        dataManager = PULSE.CLIENT.getDataManager();
        dataManager.startAll();
    };

    /**
     * Looks for all data-widget attributes in the given DOM element (or document) and creates
     * instances for each of these if they haven't been initialised already. Initialised widgets
     * will have data-initialised="true" on their data-widget DOM element.
     *
     * A data-constructor can be set to define the name of the constructor within the 'app'
     * namespace (e.g., app.MatchCentreWidget would be data-constructor="MatchCentreWidget". If
     * this is not set, it will be derived from the data-widget attribute:
     * data-widget="match-centre" becomes MatchCentreWidget
     *
     * @param {DOMElement} domScope optional override (instead of querying the whole document)
     */
    app.widgetInitialiser.addWidgets = function( domScope ) {
        var element = domScope || document;
        var widgetContainers = element.querySelectorAll( '[data-widget]' );
        for( var i = 0; i < widgetContainers.length; i++ ) {
            var constructorName = widgetContainers[ i ].getAttribute( 'data-constructor' );
            var widgetMarker = widgetContainers[ i ].getAttribute( 'data-widget' );
            if( !constructorName && widgetMarker ) {
                constructorName = getConstructorName( widgetMarker );
            }
            if( app.hasOwnProperty( constructorName ) ) {
                createWidget( widgetMarker, widgetContainers[ i ], app[ constructorName ] );
            }
        }

        dataManager = PULSE.CLIENT.getDataManager();
        dataManager.startAll();
    };

    /**
     * Adds an instance of a given widget to the widget array stored in the app
     * @param {String} widgetMarker the name of the data-widget attribute to query for in order to find the widgets
     * @param {DOMElement} widgetContainer the DOM element for the widget
     * @param {Object} WidgetConstructor the class to create a new instance of for the widget
     */
    var createWidget = function( widgetMarker, widgetContainer, WidgetConstructor ) {
        try{
            if( widgetContainer.getAttribute( 'data-initialised' ) !== 'true' ) {
                if( !app.widgets[ widgetMarker ] ) {
                    app.widgets[ widgetMarker ] = [];
                }

                var tournament = getTournament( widgetContainer );

                app.widgets[ widgetMarker ].push( new WidgetConstructor( widgetContainer, tournament ) );
                widgetContainer.setAttribute( 'data-initialised', true );
            }
        }
        catch( err ) {
            console.error( err );
        }
    };

    /**
     * Converts the widget marker name into a Pulse App widget class name
     * e.g., "match-centre" to MatchCentreWidget
     * @param {String} widgetMarker the widget marker name (data-widget attribute value)
     * @return {String} the transformed CamelCase string of the widget class
     */
    var getConstructorName = function( widgetMarker ) {
        return widgetMarker.toLowerCase().replace( /(\b|-)\w/g, function( matchingString ) {
            return matchingString.toUpperCase().replace( /-/, '' );
        } ) + 'Widget';
    };

    /**
     * Retrieves the corrent tournament instance for the widget given
     * @param  {HTMLElement}        element  the mapping of data attributes for the widget container
     * @return {cricket.Tournament}          the tournament instance
     */
    var getTournament = function( element ) {
        var tournament;
        if( element.dataset.season ) { // old, legacy format
            var metadata = app.getMetadataByTournamentName( element.dataset.season );
            if( typeof metadata !== 'undefined' ) {
                tournament = app.cricketStore.getTournament( metadata.id );
            }
        }
        else if( element.dataset.tournamentId ) { // new format
            var tournamentId = parseFloat( element.dataset.tournamentId, BASE_TEN );
            if( !isNaN( tournamentId ) ) {
                tournament = app.cricketStore.getTournament( tournamentId );
            }
        }
        return tournament;
    };

}( PULSE.app ) );
/*globals PULSE, PULSE.app */

(function( app ){
	"use strict";

	window.onload = function(){
		app.widgetDeps();
		app.I18N.setup();

		/** If FastClick.js is loaded it rebinds all click events with touch events where necessary */
		if( FastClick !== null ){
			FastClick.attach(document.body);
		}
	};

}( PULSE.app ));