//
//  RCTActionExtension.m
//  RNActionExtension
//
//  Created by Grewal, Rajat on 5/13/18.
//  Copyright © 2018 Facebook. All rights reserved.
//

#import "RCTActionExtension.h"
#import "ActionViewController.h"
@implementation RCTActionExtension
RCT_EXPORT_MODULE();

RCT_EXPORT_METHOD(done) {
  [actionViewController done];
}
@end
