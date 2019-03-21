//
//  OCWeb3Utils.h
//  QuickWallet
//
//  Created by zhoujian on 2019/3/21.
//  Copyright © 2019 Facebook. All rights reserved.
//

#import <Foundation/Foundation.h>

NS_ASSUME_NONNULL_BEGIN

@interface OCWeb3Utils : NSObject

+ (NSData *)keccak256:(NSData *)data;

+ (NSString *)hex:(NSData *)data;

+ (NSData *)getFixData:(NSData *)data;

+ (NSData *)getConfigurableData:(NSData *)data;

+ (NSData *)hexToData:(NSString *)str;

@end

NS_ASSUME_NONNULL_END
