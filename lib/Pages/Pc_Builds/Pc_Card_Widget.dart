import 'package:flutter/material.dart';

class ProductCard extends StatelessWidget {
  // final String imageUrl;
  final String title;

  ProductCard({
    // required this.imageUrl,
    required this.title,
  });

  @override
  Widget build(BuildContext context) {
    return Card(
      elevation: 3, // Add shadow to the card
      margin: EdgeInsets.symmetric(
          vertical: 10, horizontal: 10), // Margin around the card
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          // Product Image
          Container(
            alignment: Alignment.center,
            width: 250, // Make the image full width
            height: 250, // Set the image height
            decoration: BoxDecoration(
              image: DecorationImage(
                image: NetworkImage(
                  'https://m.media-amazon.com/images/I/71+eGgpgZCL._SL1500_.jpg',
                ),
                // Load image from URL
                fit: BoxFit.fill, // Scale the image to cover the container
              ),
            ),
          ),

          // Title
          Padding(
            padding: EdgeInsets.all(10),
            child: Text(
              title,
              style: TextStyle(
                fontSize: 18,
                fontWeight: FontWeight.bold,
                overflow: TextOverflow.ellipsis,
              ),
              maxLines: 2,
            ),
          ),
          Center(
            child: Container(
              margin: EdgeInsets.only(top: 30, left: 0),
              alignment: Alignment.center,
              width: MediaQuery.sizeOf(context).width * 0.1 / 0.7,
              height: MediaQuery.sizeOf(context).height * 0.1 / 2,
              decoration: BoxDecoration(
                  borderRadius: BorderRadius.circular(20),
                  border: Border.all(color: Colors.black.withOpacity(0.8))),
              child: Text(
                'Button',
                style: TextStyle(
                    fontSize: 18,
                    color: Colors.black.withOpacity(0.8),
                    fontWeight: FontWeight.w600),
              ),
            ),
          )

          // Subtitle
        ],
      ),
    );
  }
}
