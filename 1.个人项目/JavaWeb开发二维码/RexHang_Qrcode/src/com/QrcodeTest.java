package com;
import java.awt.Color;
import java.awt.Graphics2D;
import java.awt.image.BufferedImage;
import java.io.File;

import javax.imageio.ImageIO;

import com.swetake.util.Qrcode;

/**
 *		Java开发微信二维码扫一扫生成器
 *		@author RexHang
 *		@version v.0 
 */
public class QrcodeTest {

		/**
		 *	  根据内容生成二维码图片
		 *	  @param contents 内容
		 *    @param imgPath 生成图片存储的服务器地址
		 */
		public static void getQrcodeImgBycontent(String contents,String imgPath){
				
				int width = 140;
				int height = 140;
			
				try{
				// 实例化Qrcode new
				Qrcode qrCode = new Qrcode();
				// 设置二维码的排错率 可选项L（7%），M（15%），Q（25%），H（30%）
				qrCode.setQrcodeErrorCorrect('M');
				qrCode.setQrcodeEncodeMode('B');
				
				// 设置二维码的尺寸 取值范围[1-40]
				qrCode.setQrcodeVersion(7);
				// 设置图片的尺寸
				BufferedImage bufImg = new BufferedImage(width,height,BufferedImage.TYPE_INT_BGR);
				// 绘制二维码图片
				Graphics2D gs = bufImg.createGraphics();
				// 设置二维码矩形区域的背景颜色，设置为白色
				gs.setBackground(Color.RED);
				// 创建一个图片的矩形区域
				gs.clearRect(0, 0, width, height);
				// 设置二维码的颜色
				gs.setColor(Color.BLUE);
				
				
				// 获取内容，通过一个数组的形式，设置编码
				byte[] contentBytes = contents.getBytes("gb2312");
				
				// 设置偏移量，（如果不设置，可能会导致解析错误）
				int pixoff = 2;
				
				// 输出二维码
				if(contentBytes.length >0&& contentBytes.length < 120){
					 boolean[][] codeOut = qrCode.calQrcode(contentBytes);
					 for(int i = 0; i < codeOut.length; i++){
						 	for(int j = 0; j < codeOut.length; j++){
						 		  if(codeOut[j][i]){
						 			  gs.fillRect(j * 3 + pixoff, i * 3 +pixoff, 3, 3);
						 			  
						 		  }
						 		
						 	}
						 
					 }
					 	
				} else{
					 System.out.println("出错了，可能是您的内容长度超出了最大限制！");
					
				}
				
				gs.dispose();
				bufImg.flush();
				// 生成二维码的Qrcode图片
				File imgFile = new File(imgPath);
				ImageIO.write(bufImg, "png" , imgFile);
				System.out.println("生产二维码成功！");				
			} catch (Exception e){
					e.getStackTrace();
					
				}
			
		}
	
		public static void main(String[] args){
			
				System.out.println("RexHang制作的二维码");
				String contents = "http://p8.qhimg.com/dmt/234_175_/t018a2747ead92193d5.jpg";
				String imgPath = "C:\\Users\\顾航\\RexHang.png";
				
				getQrcodeImgBycontent(contents,imgPath);
		}
}
