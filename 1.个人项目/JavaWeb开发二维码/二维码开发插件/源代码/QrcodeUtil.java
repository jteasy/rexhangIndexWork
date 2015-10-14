package com.energy.framework.qrcode;

import java.awt.Color;
import java.awt.Graphics2D;
import java.awt.Image;
import java.awt.image.BufferedImage;
import java.io.File;
import java.io.UnsupportedEncodingException;

import javax.imageio.ImageIO;

import com.swetake.util.Qrcode;

/**
 * Java开发微信二维码扫一扫生成器
 * 
 * @author Erik Lee
 * @version v1.0
 * 
 *          2014年8月16日
 */
public class QrcodeUtil {

	/**
	 * 根据内容生成二维码图片
	 * 
	 * @param contents
	 *            内容
	 * @param imgPath
	 *            图片生成存储服务器地址
	 */
	public static void createQRCode(String contents, String imgPath) {
		int width = 140;
		int height = 140;
		try {
			// 实例化Qrcode new
			Qrcode qrCode = new Qrcode();
			// 设置二维码的排错率 L(7%) M(15%) Q(25%) H(30%)
			qrCode.setQrcodeErrorCorrect('M');
			qrCode.setQrcodeEncodeMode('B');

			// 设置二维码的尺寸 [1-40]
			qrCode.setQrcodeVersion(7);
			// 设置图片的尺寸
			BufferedImage bufImg = new BufferedImage(width, height, BufferedImage.TYPE_INT_BGR);

			// 绘制二维码图片
			Graphics2D gs = bufImg.createGraphics();
			// 设置二维码运行区域的背景颜色，白色
			gs.setBackground(Color.WHITE);
			// 创建一个图片的矩形区域
			gs.clearRect(0, 0, 140, 140);
			// 设置二维码的颜色
			gs.setColor(Color.BLACK);

			// 获取内容，通过一个数组的形式 设置编码
			// byte[] contentBytes = contents.getBytes("gb2312");
			byte[] contentBytes = contents.getBytes("utf-8");

			// 设置偏移量（如果不设置，可能会导致解析）
			int pixoff = 2;

			// 输出二维码
			if (contentBytes.length > 0 && contentBytes.length < 120) {
				boolean[][] codeOut = qrCode.calQrcode(contentBytes);
				for (int i = 0; i < codeOut.length; i++) {
					for (int j = 0; j < codeOut.length; j++) {
						if (codeOut[j][i]) {
							gs.fillRect(j * 3 + pixoff, i * 3 + pixoff, 3, 3);
						}
					}
				}
			} else {
				System.out.println("出错了，可能是您输入的内容长度超出最大限制！");
			}

			gs.dispose();
			bufImg.flush();

			// 生成二维码的Qrcode图片
			File imgFile = new File(imgPath);
			// formatName 图片格式 JPEG JPG PNG
			ImageIO.write(bufImg, "png", imgFile);
			System.out.println("生成二维码成功！生成位置：" + imgFile);
		} catch (Exception e) {
			e.printStackTrace();
		}
	}

	// java程序的入口函数
	public static void main(String[] args) {
		String contents = "happy birthday to you!";
		String imgPath = "d:\\desktop\\Qrcode.png";
		QrcodeUtil.createQRCode(contents, imgPath);
	}

}
