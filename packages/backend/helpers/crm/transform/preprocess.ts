import { TP_ID } from '@prisma/client';
import { StandardObjects } from '../../../constants/common';
import { PipedriveDealStatus } from '../../../constants/pipedrive';

export const preprocessUnifyObject = <T extends Record<string, any>>({
    obj,
    tpId,
    objType,
}: {
    obj: T;
    tpId: TP_ID;
    objType: StandardObjects;
}) => {
    const preprocessMap: any = {
        [TP_ID.pipedrive]: {
            [StandardObjects.deal]: (obj: T) => {
                return {
                    ...obj,
                    revert_isWon: obj.status === PipedriveDealStatus.won,
                };
            },
        },
        [TP_ID.zohocrm]: {
            [StandardObjects.deal]: (obj: T) => {
                return {
                    ...obj,
                    revert_isWon: obj.Stage === 'Closed (Won)',
                };
            },
        },
    };
    const transformFn = (preprocessMap[tpId] || {})[objType];
    return transformFn ? transformFn(obj) : obj;
};

export const postprocessDisUnifyObject = <T extends Record<string, any>>({
    obj,
    tpId,
    objType,
}: {
    obj: T;
    tpId: TP_ID;
    objType: StandardObjects;
}) => {
    const preprocessMap: Record<TP_ID, Record<any, Function>> = {
        [TP_ID.pipedrive]: {
            // [StandardObjects.event]: (obj: T) => {
            //     return {
            //         ...obj,
            //         revert_type: 'meeting',
            //     };
            // },
            [StandardObjects.deal]: (obj: T) => {
                return {
                    ...obj,
                    status: obj.revert_isWon ? PipedriveDealStatus.won : PipedriveDealStatus.open,
                    revert_isWon: undefined,
                };
            },
            [StandardObjects.contact]: (obj: T) => {
                return {
                    ...obj,
                    name: `${obj.first_name} ${obj.last_name}`
                };
            },
        },
        [TP_ID.sfdc]: {
            [StandardObjects.deal]: (obj: T) => {
                return {
                    ...obj,
                    Probability: Number(obj.Probability) * 100,
                };
            },
            [StandardObjects.company]: (obj: T) => {
                return {
                    ...obj,
                    Type: obj.additional?.type,
                };
            },
        },
        [TP_ID.zohocrm]: {
            [StandardObjects.deal]: (obj: T) => {
                return {
                    ...obj,
                    Probability: Number(obj.Probability) * 100,
                };
            },
            [StandardObjects.company]: (obj: T) => {
                return {
                    ...obj,
                    Account_Type: obj.additional?.type,
                };
            },
        },
        [TP_ID.hubspot]: {
            [StandardObjects.event]: (obj: T) => {
                return {
                    ...obj,
                    hs_timestamp: Date.now().toString(),
                };
            },
            [StandardObjects.note]: (obj: T) => {
                return {
                    ...obj,
                    hs_timestamp: Date.now().toString(),
                };
            },
            [StandardObjects.task]: (obj: T) => {
                return {
                    ...obj,
                    hs_timestamp: Date.now().toString(),
                };
            },
        },
    };
    const transformFn = (preprocessMap[tpId] || {})[objType];
    return transformFn ? transformFn(obj) : obj;
};
