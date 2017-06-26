//
//  ViewController.swift
//  RN_OR_IOS
//
//  Created by Mr on 2017/6/26.
//  Copyright © 2017年 Mr. All rights reserved.
//

import UIKit

class ViewController: UIViewController {

    override func viewDidLoad() {
        super.viewDidLoad()
        
//        let rootReact: RCTRootView = RCTRootView(bundleURL: NSURL(string: "http://192.168.6.176:8081/index.ios.bundle?platform=ios&dev=true")! as URL, moduleName: "RN_OR_IOS", initialProperties: nil, launchOptions: nil)
        
        let jsCodeLocation = NSURL(string:"http://192.168.6.176:8081/index.ios.bundle?platform=ios&dev=true");
        let rootView = RCTRootView(bundleURL: jsCodeLocation! as URL, moduleName: "RN_OR_IOS", initialProperties: nil, launchOptions: nil);
        
        self.view.addSubview(rootView!);
        
        rootView?.frame = self.view.bounds
        // Do any additional setup after loading the view, typically from a nib.
    }
    

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        // Dispose of any resources that can be recreated.
    }


}

