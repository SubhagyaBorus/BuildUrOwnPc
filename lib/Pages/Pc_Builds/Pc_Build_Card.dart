import 'package:build_ur_own_pc/Pages/Pc_Builds/Pc_Build_Page.dart';
import 'package:build_ur_own_pc/Pages/Pc_Builds/Pc_Card_Widget.dart';
import 'package:flutter/material.dart';
import 'package:flutter/services.dart';

import 'dart:convert' as convert;

class PcBuildCard extends StatefulWidget {
  const PcBuildCard({Key? key}) : super(key: key);

  @override
  _PcBuildCardState createState() => _PcBuildCardState();
}

class _PcBuildCardState extends State<PcBuildCard> {
  bool isloading = false;
  @override
  Widget build(BuildContext context) {
    return Container(
      child: Text("Hello"),
    );
  }
}
/*ListTile(
                    title: Text('Vin Number: ${data.VinNumber.toString()}'),
                    subtitle:
                        Text('License Plate: ${data.LicensePlate.toString()}'),
                  )
*/


/*  
Navigator.of(context).push(MaterialPageRoute(
                            builder: (context) {
                              return FutureBuilder(
                                  future: _loadDataFromJson(),
                                  builder: (context, AsyncSnapshot snapshot) {
                                    if (snapshot.connectionState ==
                                        ConnectionState.waiting) {
                                      return CircularProgressIndicator();
                                    } else if (snapshot.hasError) {
                                      return Text('Error: ${snapshot.error}');
                                    } else {
                                      return PcBuildPage(
                                          pcBuildDataList: snapshot.data);
                                    }
                                  });
                            },
                          )); */