import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
    container: {
        flex: 1
    },
    Row: {
        flexDirection: 'row'
    },
    Block: {
        flex: 1,
        alignItems: 'center',
        paddingTop: '0.5rem'
    },
    Header: {
        backgroundColor: '#050830',
        // backgroundColor: '#fdfdfd',
        alignItems: 'center',
    },

        HeaderLargeText: {
            color: '#ED1B24',
            fontSize: '1.1rem'

        },
        HeaderSmallText: {
            fontSize: '0.8rem',
            color: '#ffffff'
        },

    Main: {
        backgroundColor: '#ffffff',
        alignItems: 'center'
    },
        MainSmallText: {
            fontSize: '0.8rem',
            color: '#000000'
        },
        /*---- TABLE ---------------*/
        $widthCol: 80,
        $heightCol: 27,
        TableRow: {
            flexDirection: 'row'
        },
        TableHead: {
            backgroundColor: '#1D2044',
        },
        TableCol: {
            // backgroundColor: '#ffffff',
            width: '$widthCol',
            height: '$heightCol',
            marginLeft: 1,
            padding: 5
        },
        TableColText: {
            color: '#ffffff',
            fontSize: '.8rem'
        },

    BallsList: {
        flexDirection: 'row',
        marginTop: 20,
        marginBottom: 20
    },
    $size: 50,
    Circle: {
        width: '$size',
        height: '$size',
        borderRadius: '0.5*$size',
        backgroundColor: '#050830',
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 2,
        marginRight: 2,
        borderWidth: 3,
        borderColor: '#ffffff'
    },

    // 'CircleBG:nth-child-even':{
    //     backgroundColor: '#F78F1E'
    // },
    // 'CircleBG:first-child':{
    //     backgroundColor: '#ffffff'
    // },
    // 'CircleBG:last-child':{
    //     backgroundColor: '#FFEE00'
    // },
    BG0: {
        backgroundColor: '#023EA5'
    },
    BG1: {
        backgroundColor: '#F78F1E'
    },
    BG2: {
        backgroundColor: '#19AEC8'
    },
    BG3: {
        backgroundColor: '#581452'
    },
    BG4: {
        backgroundColor: '#F6C30A'
    },
    BG5: {
        backgroundColor: '#179749'
    },


    BallText: {
        color: '#ffffff',
        fontWeight: 'bold',
        fontSize: 18
    },

    Prize: {
        fontSize: 32,
        color: '#ED1B24',
        fontWeight: 'bold'
    },
        PrizeText: {
            color: '#ffffff'
        },

    GetNums: {
        width: '$size*2.3',
        height: '$size*0.5',
        borderRadius: '0.5*$size',
        backgroundColor: '#ED1D27',
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: '#f99d48',
        marginRight: 5
    },


    centering: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fafafa'
      },

      button: {
       backgroundColor: '#ccc',
       borderRadius: 5,
       padding: 10
   },
   close: {
       position: 'absolute',
       right: 20,
       top: 40,
       backgroundColor: 'red'
   },
   modalContainer: {
       height: 100,
       width: 200,
       justifyContent: 'center',
       alignItems: 'center',
       backgroundColor: 'blue'
   },
   text: {
       color: '#fff'
   }

});
