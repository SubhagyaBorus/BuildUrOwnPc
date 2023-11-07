import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:url_launcher/url_launcher.dart';
import 'dart:convert' as convert;

class PcBuildPage extends StatefulWidget {
  const PcBuildPage({
    super.key,
  });

  @override
  State<PcBuildPage> createState() => _PcBuildPageState();
}

class _PcBuildPageState extends State<PcBuildPage> {
  bool isloading = false;

  @override
  Widget build(BuildContext context) {
    List arrname = [
      (Processor: 'i5', Price: '15000'),
      (Processor: 'i5', Price: '15000'),
      (Processor: 'i5', Price: '15000'),
    ];
    return Scaffold(
        body: ListView(
      scrollDirection: Axis.horizontal,
      children: arrname
          .map((value) => Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Image.network(
                    value['ProcessorImage'].toString(),
                    scale: 10,
                  ),
                  ElevatedButton(
                      onPressed: () {
                        launchUrl(
                            Uri.parse(
                              value['Processor'].toString(),
                            ),
                            mode: LaunchMode.externalNonBrowserApplication);
                      },
                      child: Text('Click Me'))
                ],
              ))
          .toList(),
    ));
  }
}

/*ListView(
        scrollDirection: Axis.horizontal,
        children: arrname
            .map((value) => Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Image.network(
                      value['ProcessorImage'].toString(),
                      scale: 10,
                    ),
                    ElevatedButton(
                        onPressed: () {
                          launchUrl(
                              Uri.parse(
                                value['Processor'].toString(),
                              ),
                              mode: LaunchMode.externalNonBrowserApplication);
                        },
                        child: Text('Click Me'))
                  ],
                ))
            .toList(),
      ), */