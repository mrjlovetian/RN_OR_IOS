//
//  PushNative.m
//  RNforSaaS
//
//  Created by Mr on 2017/6/28.
//  Copyright © 2017年 Mr. All rights reserved.
//

#import "PushNative.h"
#import <React/RCTBridge.h>

///导入需要跳转的页面
#import "RN_OR_IOS-Swift.h"

@implementation PushNative

    // RN跳转原生界面
    // DestinationViewController指的就是跳转的方法，下面会用到
RCT_EXPORT_MODULE()
    
    ///使用主线程
    RCT_EXPORT_METHOD(openVC: (NSString *)msg){
        NSLog(@"接收到RN的参数是%@", msg);
        dispatch_sync(dispatch_get_main_queue(), ^{
//            DestinationViewController *vc = [[DestinationViewController alloc] init];
//            
//             [[[[UIApplication sharedApplication].delegate window] rootViewController] presentViewController:vc animated:YES completion:^{
//                 
//             }];
            
        });
    }


@end
