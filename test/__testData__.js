export const initalState = {
  errorFetchingData: null,
  isFetchingData: false,
  data: {},
  pattern: {},
  errorFetchingPattern: null,
  isFetchingPattern: false
};

export const stateWithData = {
  ...initalState,
  data: {
    requestId: '6u5UfAicTE+Bod4SXSvXTg',
    queryEarlierServices: 'https://realtime.thetrainline.com/Departures/WAT?Date=2018-07-19&Time=18:56&ExpectedWindow=-61&DesiredNumberOfServices=50',
    queryLaterServices: 'https://realtime.thetrainline.com/Departures/WAT?Date=2018-07-19&Time=19:59&DesiredNumberOfServices=50',
    realTimeDataSourceAvailable: true,
    timestamp: '2018-07-19T18:57:00+01:00',
    services: [
      {
        serviceIdentifier: 'W13510',
        serviceOperator: 'SW',
        transportMode: 'TRAIN',
        scheduledInfo: {
          scheduledTime: '2018-07-19T18:57:00+01:00',
          scheduledPlatform: '4'
        },
        callingType: 'PickUp',
        destinationList: [
          {
            crs: 'WAT'
          }
        ],
        circularRoute: true,
        realTimeUpdatesInfo: {
          realTimeServiceInfo: {
            realTime: '2018-07-19T18:57:00+01:00',
            realTimePlatform: '4',
            realTimeFlag: 'Estimate'
          }
        },
        callingPatternUrl: 'https://realtime.thetrainline.com/callingPattern/W13510/2018-07-19'
      },
      {
        serviceIdentifier: 'W15028',
        serviceOperator: 'SW',
        transportMode: 'TRAIN',
        scheduledInfo: {
          scheduledTime: '2018-07-19T18:58:00+01:00',
          scheduledPlatform: '17'
        },
        callingType: 'PickUp',
        destinationList: [
          {
            crs: 'WNR'
          }
        ],
        realTimeUpdatesInfo: {
          realTimeServiceInfo: {
            realTime: '2018-07-19T18:58:00+01:00',
            realTimePlatform: '17',
            realTimeFlag: 'Estimate'
          }
        },
        callingPatternUrl: 'https://realtime.thetrainline.com/callingPattern/W15028/2018-07-19'
      },
      {
        serviceIdentifier: 'W10989',
        serviceOperator: 'SW',
        transportMode: 'TRAIN',
        scheduledInfo: {
          scheduledTime: '2018-07-19T19:00:00+01:00',
          scheduledPlatform: '12'
        },
        callingType: 'PickUp',
        destinationList: [
          {
            crs: 'PMH'
          }
        ],
        realTimeUpdatesInfo: {
          realTimeServiceInfo: {
            realTime: '2018-07-19T19:00:00+01:00',
            realTimePlatform: '12',
            realTimeFlag: 'Estimate'
          }
        },
        callingPatternUrl: 'https://realtime.thetrainline.com/callingPattern/W10989/2018-07-19'
      },
      {
        serviceIdentifier: 'W12270',
        serviceOperator: 'SW',
        transportMode: 'TRAIN',
        scheduledInfo: {
          scheduledTime: '2018-07-19T19:01:00+01:00',
          scheduledPlatform: '5'
        },
        callingType: 'PickUp',
        destinationList: [
          {
            crs: 'EPS'
          }
        ],
        realTimeUpdatesInfo: {
          realTimeServiceInfo: {
            realTime: '2018-07-19T19:01:00+01:00',
            realTimePlatform: '5',
            realTimeFlag: 'Estimate'
          }
        },
        callingPatternUrl: 'https://realtime.thetrainline.com/callingPattern/W12270/2018-07-19'
      }
    ]
  },
};

export const stateWithPattern = {
  ...stateWithData,
};

export const stops = [
  {
    location: {
      crs: 'WAT'
    },
    arrival: {
      notApplicable: true
    },
    departure: {
      scheduled: {
        scheduledTime: '2018-07-21T00:27:00+01:00',
        scheduledPlatform: '7'
      },
      realTime: {
        realTimeServiceInfo: {
          hasDeparted: false,
          realTime: '2018-07-21T00:27:00+01:00',
          realTimePlatform: '13',
          realTimeFlag: 'Estimate'
        }
      }
    },
    callingType: 'PickUp'
  },
  {
    location: {
      crs: 'VXH'
    },
    arrival: {
      scheduled: {
        scheduledTime: '2018-07-21T00:30:00+01:00'
      },
      realTime: {
        realTimeServiceInfo: {
          hasArrived: false,
          realTime: '2018-07-21T00:30:00+01:00',
          realTimePlatform: '8',
          realTimeFlag: 'Estimate'
        }
      }
    },
    departure: {
      scheduled: {
        scheduledTime: '2018-07-21T00:31:00+01:00'
      },
      realTime: {
        realTimeServiceInfo: {
          hasDeparted: false,
          realTime: '2018-07-21T00:31:00+01:00',
          realTimePlatform: '8',
          realTimeFlag: 'Estimate'
        }
      }
    },
    callingType: 'Normal'
  },
  {
    location: {
      crs: 'CLJ'
    },
    arrival: {
      scheduled: {
        scheduledTime: '2018-07-21T00:35:00+01:00',
        scheduledPlatform: '11'
      },
      realTime: {
        realTimeServiceInfo: {
          hasArrived: false,
          realTime: '2018-07-21T00:35:00+01:00',
          realTimePlatform: '11',
          realTimeFlag: 'Estimate'
        }
      }
    },
    departure: {
      scheduled: {
        scheduledTime: '2018-07-21T00:37:00+01:00',
        scheduledPlatform: '11'
      },
      realTime: {
        realTimeServiceInfo: {
          hasDeparted: false,
          realTime: '2018-07-21T00:37:00+01:00',
          realTimePlatform: '11',
          realTimeFlag: 'Estimate'
        }
      }
    },
    callingType: 'Normal'
  },
  {
    location: {
      crs: 'WOK'
    },
    arrival: {
      scheduled: {
        scheduledTime: '2018-07-21T01:12:00+01:00',
        scheduledPlatform: '5'
      },
      realTime: {
        realTimeServiceInfo: {
          hasArrived: false,
          realTime: '2018-07-21T01:12:00+01:00',
          realTimePlatform: '5',
          realTimeFlag: 'Estimate'
        }
      }
    },
    departure: {
      notApplicable: true
    },
    callingType: 'SetDown'
  }
];
